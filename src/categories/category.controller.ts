import { Controller, Post, Patch, Get, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
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
    @Post()
    createCategory() {}
    @Delete()
    removeCategory() {}

}
