import { Column, Entity, ObjectId } from "typeorm";

@Entity('categories')
export class Category {
    @Column({ nullable: true })
    title: string;
    @Column({ nullable: false })
    parent: ObjectId;
}