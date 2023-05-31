import { Controller, Post, Patch, Get, Delete } from '@nestjs/common';
import { ApiConsumes, ApiBody, ApiTags, ApiBearerAuth, ApiSecurity } from '@nestjs/swagger';
import { ProductService } from './product.service';

@ApiTags('products')
@ApiBearerAuth()
@Controller('products')
// @UseGuards(AuthGuard())
@ApiSecurity('bearerAuth')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) { }

    @Post('add')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'Create Product',
        schema: {
            type: 'object',
            properties: {
                title : { type: 'string' },
                description : { type: 'string' },
                size : { type: 'string' },
                price : { type: 'string', example: '25000' },
                category : { type: 'string', example: "62822e4ff68cdded54aa928d" },
                color : { type: 'array', items: { type: "string", enum: ['black', 'white', 'red', 'blue'] } },
                images : { type: 'array', items: { type: "string", format: "binary" } },
            },
            required: ['title', 'description', 'size', 'price', 'category'],
        },
    })
    createProduct() {}
    @Get()
    getProducts() {}
    @Get()
    getProduct() {}
    @Patch()
    updateProduct() {}
    @Delete()
    deleteProduct() {}
}
