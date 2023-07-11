import { Controller, Body, Post, Patch, Get, Delete, Param, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiSecurity, ApiTags, ApiParam } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.entity';
import { CategoryIdDto } from './dto/id-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
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
    getCategory(@Param(new ValidationPipe()) categoryIdDto: CategoryIdDto): Promise<Category> {
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
    createCategory(@Body(new ValidationPipe()) createCategoryDto: CreateCategoryDto): Promise<Category> {
        return this.categoryService.createCategory(createCategoryDto);
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
    updateCategory(@Body(new ValidationPipe()) updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        return this.categoryService.updateCategory(updateCategoryDto);
    }
    @Delete('remove/:id')
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'Id of the category',
    })
    removeCategory(@Param() categoryIdDto: CategoryIdDto): Promise<Category> {
        const { id } = categoryIdDto;
        return this.categoryService.deleteCategoryById(id);
    }

}
