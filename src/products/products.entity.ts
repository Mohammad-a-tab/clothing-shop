import { Column, CreateDateColumn, Entity } from "typeorm";
@Entity('products')
export class Product {
    @Column({ nullable: true })
    title: string;
    @Column({ nullable: false, unique: true })
    description: string;
    @Column({ nullable: false })
    size: string
    @Column({ nullable: false })
    price: string
    @Column({ default: "" })
    images: [string];
}