import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from 'mongoose';


@Entity('categories')
export class Category {
    @ObjectIdColumn()
    id: ObjectId;
    @Column({ nullable: false })
    title: string;
    @Column({ nullable: true })
    parent: ObjectId;

}

