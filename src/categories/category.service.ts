import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryRepository) private readonly categoryRepository: CategoryRepository
    ) { }

    async createCategory(createCategoryDTO: CreateCategoryDTO): Promise<Category> {
        const category = this.categoryRepository.createCategory(createCategoryDTO);
        return category;
    }
    async getAllCategories(): Promise<Category[]> {
        const categories = await this.categoryRepository.find();
        return categories;
    }

}

