import { Controller, Body, Post, Patch, Get, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { Category } from './category.entity';
@ApiTags('categories')
@ApiBearerAuth()
// @UseGuards(AuthGuard())
@ApiSecurity('bearerAuth')
@Controller('categories')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService
    ) { }
    
    @Get()
    getCategory() {}
    @Post('add')
    createCategory(@Body() createCategoryDTO : CreateCategoryDTO): Promise<Category> {
        return this.categoryService.createCategory(createCategoryDTO);
    }
    @Delete()
    removeCategory() {}

}
