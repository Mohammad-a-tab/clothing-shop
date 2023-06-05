import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { Category } from './category.entity';
import { FindOneOptions } from 'typeorm';
import { ObjectId } from 'mongodb';
// import { ObjectId } from 'mongoose';



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
    async getCategory(id: ObjectId): Promise<Category> {
        // const options: FindOneOptions<Category> = {
        //     where: {
        //       id: new ObjectId(id),
        //     },
        // };
        // const categoryId: ObjectId = new ObjectId(); // Your desired category ID

        const options: FindOneOptions<Category> = {
            where: { id: id },
        };
        const category = await this.categoryRepository.findOne(options);
        return category
      
    }
    async deleteCategoryById(id: ObjectId): Promise<Category> {
        const category = await this.getCategory(id);
        await this.categoryRepository.remove(category);
        return category;
    }

}

