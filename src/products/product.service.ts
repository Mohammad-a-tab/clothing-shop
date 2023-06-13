import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './product.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository) 
        private readonly productRepository: ProductRepository
    ) { }
    async getAllProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }
    async getProduct(id: string): Promise<Product> {
        const productId = new ObjectId(id);
        const product = await this.productRepository.findOneBy({ _id: productId });
        return product;
    }
    async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const product = this.productRepository.createProduct(createProductDTO);
        return product;
    }
    async deleteProductById(id: string): Promise<Product> {
        const product = await this.getProduct(id);
        await this.productRepository.remove(product);
        return product;
    }
}