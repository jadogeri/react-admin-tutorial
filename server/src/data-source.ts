import { DataSource } from "typeorm";
import { User } from "./user/user.entity";
import { Post } from "./post/post.entity";
export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite", // SQLite database file name
    synchronize: true, // Automatically create database tables from entities (good for development)
    logging: false,
    entities: [User, Post],
    migrations: [],
    subscribers: [],
});
