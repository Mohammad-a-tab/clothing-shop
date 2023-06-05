import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDTO } from './dtos/create-category.dto';
import { Category } from './category.entity';
import { FindOneOptions } from 'typeorm';


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
    async getCategory(id: string): Promise<Category> {
        const options: FindOneOptions<Category> = {
            where: {
              id: new ObjectId(id),
            },
        };
      
    }
    async deleteCategoryById(id: string): Promise<void> {
        const category = await this.
    }

}

