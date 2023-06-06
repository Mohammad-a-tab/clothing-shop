import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { Category } from './category.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryRepository) private readonly categoryRepository: CategoryRepository
    ) { }
    
    async getAllCategories(): Promise<Category[]> {
        const categories = await this.categoryRepository.find();        
        return categories;
    }
    async getCategory(id: string): Promise<Category> {
        const categoryId = new ObjectId(id);
        const category = await this.categoryRepository.findOneBy({ _id: categoryId });
        return category
    }
    async createCategory(createCategoryDTO: CreateCategoryDTO): Promise<Category> {
        const category = this.categoryRepository.createCategory(createCategoryDTO);
        return category;
    }
    async deleteCategoryById(id: string): Promise<Category> {
        const category = await this.getCategory(id);
        await this.categoryRepository.remove(category);
        return category;
    }
}

