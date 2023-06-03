import { Controller, Body, Post, Patch, Get, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiSecurity, ApiTags } from '@nestjs/swagger';
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
    getAllCategories(): Promise<Category[]> {
        return this.categoryService.getAllCategories();
    }
    @Post('add')
    @ApiConsumes('application/x-www-form-urlencoded')
    @ApiBody({
        description: 'Create Category',
        schema: {
            type: 'object',
            properties: {
                title : { type: 'string' },
                parent : { type: 'string', example: "62822e4ff68cdded54aa928d" },
            },
            required: ['title'],
        },
    })
    createCategory(@Body() createCategoryDTO : CreateCategoryDTO): Promise<Category> {
        return this.categoryService.createCategory(createCategoryDTO);
    }
    @Delete()
    removeCategory() {}

}
