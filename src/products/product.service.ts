import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { ObjectId } from 'mongodb';
import { UpdateProductDto } from './dto/update-product.dto';
import { removeFieldEmpty } from 'src/utils/functions';

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
    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        const product = this.productRepository.createProduct(createProductDto);
        return product;
    }
    async updateProduct(updateProductDto: UpdateProductDto, id: string): Promise<Product> {
        const product = await this.getProduct(id);
        removeFieldEmpty(updateProductDto)
        console.log(updateProductDto);
        const result = this.productRepository.updateProduct(updateProductDto, product);
        return result;
    }
    async deleteProductById(id: string): Promise<Product> {
        const product = await this.getProduct(id);
        await this.productRepository.remove(product);
        return product;
    }
}