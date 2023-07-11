import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Product } from "./product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductRepository extends Repository<Product> {
    constructor(private dataSource: DataSource) {
        super(Product, dataSource.createEntityManager());
    }

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        
        const product = this.create({ ...createProductDto });
        await this.save(product);
        return product;
    }
    async updateProduct(updateProductDto: UpdateProductDto, product: Product): Promise<Product> {
        await this.update({ title: product.title }, { ... updateProductDto });
        return this.findOneBy({_id: product._id});
    }
}