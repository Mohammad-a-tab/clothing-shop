import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository) 
        private readonly productRepository: ProductRepository
    ) { }

    createProduct() {
        
    }
}
