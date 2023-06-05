import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Category } from "./category.entity";
import { CreateCategoryDTO } from './dtos/create-category.dto';
@Injectable()
export class CategoryRepository extends Repository<Category> {
    constructor(private dataSource: DataSource) {
        super(Category, dataSource.createEntityManager());
    }

    async createCategory(createCategoryDTO: CreateCategoryDTO): Promise<Category> {
        const { title, parent } = createCategoryDTO;
        const category = this.create({ title, parent });
        await this.save(category);
        return category;
    }
}