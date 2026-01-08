import { Request, response, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "./user.entity";


export class UserController {
    private userRepository = AppDataSource.getRepository(User);

    all = async (request: Request, response: Response) => {
        const users = await this.userRepository.find();

        response.set('Content-Range', `users 0-9/100`); // Required for pagination

        //response.set('Content-Range', `users 0-${users.length}/${users.length}`); // Required for pagination
        response.setHeader('Access-Control-Expose-Headers', 'Content-Range');   
        response.send(users);
    }
    
    one = async (request: Request, response: Response) => {
        const id = parseInt(request.params.id);
        const user = await this.userRepository.findOne({ where: { id } });

        if (user) {
            response.send(user);
        } else {
            response.status(404).send("User not found");
        }
    }

    save = async (request: Request, response: Response) => {
        const { username, name, email } = request.body;
        const user = new User();
        user.username = username;
        user.name = name;
        user.email = email;

        await this.userRepository.save(user);
        response.status(201).send(user);
    }

    load = async (request: Request, response: Response) => {
        const users : User[] = request.body; // Expects an array of user objects in the request body

        if (!Array.isArray(users) || users.length === 0) {
            return response.status(400).send('Request body must be a non-empty array of users.');
        }

        try {
            // Use insertMany to efficiently insert all documents at once
            const insertedUsers: User[] = await this.userRepository.save<User>(users);
            response.status(201).json({
            message: `${insertedUsers.length} users inserted successfully`,
            count: insertedUsers.length,
            });
        } catch (error) {
            console.error('Error inserting users:', error);
            response.status(500).send('Error loading data into the database.');
        }
    }

    update = async (request: Request, response: Response) => {
        const id = parseInt(request.params.id);
        const user = await this.userRepository.findOne({ where: { id } });

        if (user) {
            this.userRepository.merge(user, request.body);
            const result = await this.userRepository.save(user);
            response.send(result);
        } else {
            response.status(404).send("User not found");
        }
    }

    remove = async (request: Request, response: Response) => {
        const id = parseInt(request.params.id);
        const user = await this.userRepository.findOne({ where: { id } });

        if (user) {
            await this.userRepository.remove(user);
            response.status(204).send(); // No content response for successful deletion
        } else {
            response.status(404).send("User not found");
        }
    }

    truncate = async (request: Request, response: Response) => {
        await this.userRepository.clear();
        response.status(204).send(); // No content response for successful deletion

    }
}
export default UserController;