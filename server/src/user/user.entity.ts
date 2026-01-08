import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "../post/post.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100, unique: true })    
    username: string;

    @Column({ type: "varchar", length: 100, unique: true })    
    name: string;

    @Column({ type: "varchar", length: 100, unique: true })
    email: string;

    // This decorator tells TypeORM that one user has many posts
    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];
}
