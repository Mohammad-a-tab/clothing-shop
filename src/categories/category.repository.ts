import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Category } from "./category.entity";
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { ObjectId } from "mongodb";
@Injectable()
export class CategoryRepository extends Repository<Category> {
    constructor(private dataSource: DataSource) {
        super(Category, dataSource.createEntityManager());
    }

    async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const { title, parent } = createCategoryDto;
        const category = this.create({ title, parent });
        await this.save(category);
        return category;
    }
    async updateCategory(updateCategoryDto: UpdateCategoryDto, category: Category): Promise<Category> {
        const { title, parent } = updateCategoryDto;
        await this.update({title: category.title}, { title, parent });
        return this.findOneBy({_id: category._id});
    }
}