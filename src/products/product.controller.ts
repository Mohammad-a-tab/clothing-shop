import { Controller, Post, Patch, Get, Delete, Body, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiConsumes, ApiBody, ApiTags, ApiBearerAuth, ApiSecurity, ApiParam } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Product } from './product.entity';
import { ProductIdDTO } from './dto/id-product.dto';
import { multerConfig } from 'src/utils/multer.config';

@ApiTags('products')
@ApiBearerAuth()
@Controller('products')
// @UseGuards(AuthGuard())
@ApiSecurity('bearerAuth')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) { }

    @Get()
    getAllProducts(): Promise<Product[]> {
        return this.productService.getAllProducts();
    }
    @Get(':id')
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'Id of the Product',
    })
    getProduct(@Param() productIdDTo: ProductIdDTO): Promise<Product> {
        const { id } = productIdDTo;
        return this.productService.getProduct(id);
    }
    @Post('add')
    @UseInterceptors(FileInterceptor('file', multerConfig))
    @ApiConsumes("application/x-www-form-urlencoded")
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
                colors : { type: 'array', items: { type: "string", enum: ['black', 'white', 'red', 'blue'] } },
                images : { type: 'array', items: { type: "string", format: "binary" } },
            },
            required: ['title', 'description', 'size', 'price', 'category'],
        },
    })
    createProduct(@UploadedFile() file, @Body() createProductDTO: CreateProductDTO): Promise<Product> {
        console.log(file);
        return this.productService.createProduct(createProductDTO);
    }
    @Patch()
    updateProduct() {}
    @Delete(':id')
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'Id of the Product',
    })
    deleteProduct(@Param() productIdDTo: ProductIdDTO): Promise<Product> {
        const { id } = productIdDTo;
        return this.productService.deleteProductById(id);
    }
}
