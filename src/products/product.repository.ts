import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Product } from "./product.entity";
import { CreateProductDTO } from "./dto/create-product.dto";

@Injectable()
export class ProductRepository extends Repository<Product> {
    constructor(private dataSource: DataSource) {
        super(Product, dataSource.createEntityManager());
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const { title, description, size, price, category, colors, images } = createProductDTO;
        const product = this.create({ title, description, size, price, category, colors, images });
        await this.save(product);
        return product;
    }
}