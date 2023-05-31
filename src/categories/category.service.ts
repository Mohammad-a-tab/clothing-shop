import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryRepository) private readonly blogRepository: CategoryRepository
    ) { }
    
}

