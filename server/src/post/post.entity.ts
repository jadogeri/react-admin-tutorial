import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../user/user.entity";
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100, unique: false })
    title: string;

    @Column({ type: "varchar", length: 300, unique: false, default: "" })
    body: string;

    @Column({ type: "datetime" })
    publishedAt: Date;

    // 1. Manually add this column to store the ID
    @Column({ type: "number" })
    userId: number;

    // This decorator establishes the relationship back to the User
    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: "userId" })
    user: User;
}
