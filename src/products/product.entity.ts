import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity('products')
export class Product {
    @ObjectIdColumn()
    id: ObjectId;
    @Column({ nullable: false })
    description: string;
    @Column({ nullable: false })
    size: string;
    @Column({ nullable: false })
    price: string;
    @ObjectIdColumn()
    category: ObjectId;
    @Column({ nullable: false })
    color: string;
    @Column({ type: 'varchar', array: true })
    images: string;
}