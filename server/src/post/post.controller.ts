import { Request, response, Response } from "express";
import { AppDataSource } from "../data-source";
import { Post } from "./post.entity";


export class PostController {
    private postRepository = AppDataSource.getRepository(Post);

    all = async (request: Request, response: Response) => {
        // 1. Always use findAndCount for accurate pagination
        const [posts, total] = await this.postRepository.findAndCount();
        
        // 2. Calculate the range correctly: 0 to (length - 1)
        const rangeStart = 0;
        const rangeEnd = posts.length > 0 ? posts.length - 1 : 0;

        response.set('Content-Range', `posts ${rangeStart}-${rangeEnd}/${total}`);
        response.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        response.send(posts);
    }

    
    one = async (request: Request, response: Response) => {
        const id = parseInt(request.params.id);
        const post = await this.postRepository.findOne({ where: { id } });

        if (post) {
            response.send(post);
        } else {
            response.status(404).send("Post not found");
        }
    }

    save = async (request: Request, response: Response) => {
        const { title, body, publishedAt, userId }: Post = request.body;
        const post = new Post();
        post.title = title;
        post.body = body;
        post.publishedAt = publishedAt;
        post.userId = userId;
        await this.postRepository.save(post);
        response.status(201).send(post);
    }

    load = async (request: Request, response: Response) => {
        console.log('Request Body:', request.body[0]); // Debugging line
        const posts : Post[] = request.body; // Expects an array of post objects in the request body

        if (!Array.isArray(posts) || posts.length === 0) {
            return response.status(400).send('Request body must be a non-empty array of posts.');
        }

        try {
            // Use insertMany to efficiently insert all documents at once
            const insertedPosts: Post[] = await this.postRepository.save<Post>(posts);
            response.status(201).json({
            message: `${insertedPosts.length} posts inserted successfully`,
            count: insertedPosts.length,
            });
        } catch (error) {
            console.error('Error inserting posts:', error);
            response.status(500).send('Error loading data into the database.');
        }
    }

    update = async (request: Request, response: Response) => {
        const id = parseInt(request.params.id);
        const post = await this.postRepository.findOne({ where: { id } });

        if (post) {
            this.postRepository.merge(post, request.body);
            const result = await this.postRepository.save(post);
            response.send(result);
        } else {
            response.status(404).send("Post not found");
        }
    }

    remove = async (request: Request, response: Response) => {
        const id = parseInt(request.params.id);
        const post = await this.postRepository.findOne({ where: { id } });

        if (post) {
            await this.postRepository.remove(post);
            response.status(204).send(); // No content response for successful deletion
        } else {
            response.status(404).send("Post not found");
        }
    }

    truncate = async (request: Request, response: Response) => {
        await this.postRepository.clear();
        response.status(204).send(); // No content response for successful deletion

    }
}
export default PostController;