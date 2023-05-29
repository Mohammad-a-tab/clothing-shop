import { Column, Entity, ObjectId } from "typeorm";

@Entity('products')
export class Product {
    @Column({ nullable: true })
    title: string;
    @Column({ nullable: false })
    description: string;
    @Column({ nullable: false })
    size: string;
    @Column({ nullable: false })
    price: string;
    @Column({ nullable: false })
    category: ObjectId;
    @Column({ nullable: false })
    color: string;
    @Column({ type: 'varchar', array: true })
    images: string;
}