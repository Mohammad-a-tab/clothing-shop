import { Controller, Body, Post, Patch, Get, Delete, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiSecurity, ApiTags, ApiParam } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { Category } from './category.entity';
import { CategoryIdDTO } from './dto/id-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';
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
    @Get(':id')
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'Id of the category',
    })
    getCategory(@Param() categoryIdDto: CategoryIdDTO): Promise<Category> {
        const { id } = categoryIdDto;
        return this.categoryService.getCategory(id);
    }
    @Post('add')
    @ApiConsumes('application/x-www-form-urlencoded')
    @ApiBody({
        description: 'Create Category',
        schema: {
            type: 'object',
            properties: {
                title : { type: 'string' },
                parent : { type: 'string' },
            },
            required: ['title'],
        },
    })
    createCategory(@Body() createCategoryDTO : CreateCategoryDTO): Promise<Category> {
        return this.categoryService.createCategory(createCategoryDTO);
    }
    @Patch('update')
    @ApiConsumes('application/x-www-form-urlencoded')
    @ApiBody({
        description: 'Update Category',
        schema: {
            type: 'object',
            properties: {
                id : { type: 'string' },
                title : { type: 'string' },
                parent : { type: 'string' },
            },
        },
    })
    updateCategory(@Body() updateCategoryDTO : UpdateCategoryDTO): Promise<Category> {
        return this.categoryService.updateCategory(updateCategoryDTO);
    }
    @Delete('remove/:id')
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'Id of the category',
    })
    removeCategory(@Param() categoryIdDto: CategoryIdDTO): Promise<Category> {
        const { id } = categoryIdDto;
        return this.categoryService.deleteCategoryById(id);
    }

}
