import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Product } from "./product.entity";
import { CreateProductDTO } from "./dto/create-product.dto";
import { UpdateProductDTO } from './dto/update-product.dto';

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
    async updateProduct(updateProductDTO: UpdateProductDTO, product: Product): Promise<Product> {
        const { title, description, size, price, category, colors, images } = updateProductDTO;
        await this.update({ title: product.title }, { title, description, size, price, category, colors, images });
        return this.findOneBy({_id: product._id});
    }
}