import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository) 
        private readonly productRepository: ProductRepository
    ) { }
    async getAllProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }
    createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const product = this.productRepository.createProduct(createProductDTO);
        return product;
    }
}