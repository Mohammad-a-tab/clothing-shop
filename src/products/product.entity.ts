import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from 'mongodb';

@Entity('products')
export class Product {
    @ObjectIdColumn()
    id: ObjectId;
    @Column({ nullable: false })
    title: string;
    @Column({ nullable: false })
    description: string;
    @Column({ nullable: false })
    size: string;
    @Column({ nullable: false })
    price: string;
    @Column({ nullable: false })
    category: ObjectId;
    @Column('simple-array')
    colors: string[];
    @Column('simple-array')
    images: string[];
}