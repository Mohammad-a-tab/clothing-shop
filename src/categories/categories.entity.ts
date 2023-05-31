import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity('categories')
export class Category {
    @ObjectIdColumn()
    id: ObjectId;
    @Column({ nullable: false })
    title: string;
    @ObjectIdColumn()
    parent: ObjectId;
}