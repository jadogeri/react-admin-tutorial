import "reflect-metadata"; 
import * as dotenv from 'dotenv';
dotenv.config();
import express, {Application, NextFunction, Request, Response} from 'express';
import { corsOptionsConfig } from './cors.config';
import { CorsOptions } from 'cors';
// Must be the first line of the file


import cors from 'cors';
import path from 'path';
import { AppDataSource } from './data-source';
import { UserController } from './user/user.controller';
import { userRange } from "./userRange";
import { postRange } from "./postRange";
import PostController from "./post/post.controller";

const reactAppBaseUrl = process.env.REACT_APP_BASE_URL;;

const app: Application= express();
const PORT = process.env.PORT || 4000;


// Establish database connection
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        
        app.use(express.json());

        app.use(cors(corsOptionsConfig(reactAppBaseUrl)))
        app.use(cors({ origin: '*' }));
        app.use(userRange);
        app.use(postRange);
       // app.use(cors({ exposedHeaders: ['Content-Range'] }));
        // app.options('*', cors(corsOptions)); // Enable pre-flight for all routes

        //app.use(range);

        // Define routes
        const userController = new UserController();
        app.get('/home', (req: Request, res: Response) => {
          res.send('Hello World from Express with TypeScript and ESM!');
        });         

        // Define user routes
        app.get("/users", userController.all);
        app.get("/users/:id", userController.one);
        app.post("/users", userController.save);
        app.post("/users/load", userController.load);
        app.put("/users/:id", userController.update);
        app.delete("/users/:id", userController.remove);
        app.delete("/users/truncate", userController.truncate);
        // Define post routes
        const postController = new PostController();
        app.get("/posts", postController.all);
        app.get("/posts/:id", postController.one);
        app.post("/posts", postController.save);
        app.post("/posts/load", postController.load);
        app.put("/posts/:id", postController.update);
        app.delete("/posts/:id", postController.remove);
        app.delete("/posts/truncate", postController.truncate);
        // Serve static files from the React app
        const buildPath = path.join(__dirname, '../..', 'client', 'build');  console.log('Build Path:', buildPath);
        app.use(express.static(buildPath));  
               


        app.listen(4000, () => {
            console.log("Server is running on http://localhost:4000");
        });
    })
    .catch((error) => console.error("Error during Data Source initialization:", error));
