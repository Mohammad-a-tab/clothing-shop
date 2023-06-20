import { Controller, Post, Patch, Get, Delete, Body, Param, UseInterceptors, UploadedFiles, Req } from '@nestjs/common';
import { ApiConsumes, ApiBody, ApiTags, ApiBearerAuth, ApiSecurity, ApiParam } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Product } from './product.entity';
import { ProductIdDTO } from './dto/id-product.dto';
import { multerConfig } from 'src/utils/multer.config';
import { editPathImages } from 'src/utils/functions';
import { UpdateProductDTO } from './dto/update-product.dto';

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
    getProduct(@Param() productIdDto: ProductIdDTO): Promise<Product> {
        const { id } = productIdDto;
        return this.productService.getProduct(id);
    }
    @Post('add')
    @ApiConsumes("multipart/form-data")
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
                colors : { 
                    type: 'array', items: { type: "string", 
                    enum: ['black', 'white', 'red', 'blue']} 
                },
                images : { 
                    type: 'array', items: { type: "string", format: "binary" }, 
                    description: 'لطفا از ارسال تصاویر با نام فارسی خود داری بفرمایید' 
                },
            },
            required: ['title', 'description', 'size', 'price', 'category'],
        },
    })
    @UseInterceptors(FilesInterceptor('images', 10, multerConfig))
    async createProduct(@Body() createProductDto: CreateProductDTO, @UploadedFiles() files, @Req() req): Promise<Product> {
        req.body.colors = req.body.colors.split(',').map(item => item.trim());
        editPathImages(files, createProductDto);
        return this.productService.createProduct(createProductDto);
    }
    @Patch('update/:id')
    @ApiConsumes("multipart/form-data")
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'Id of the Product',
    })
    @ApiBody({
        description: 'Create Product',
        schema: {
            type: 'object',
            properties: {
                title : { type: 'string' },
                description : { type: 'string' },
                size : { type: 'string' },
                price : { type: 'string', example: '25000' },
                category : { 
                    type: 'string', 
                    example: '609be865b58f3829f8f9a6cb', // Example ObjectId value
                    format: 'objectId',  
                },
                colors : { 
                    type: 'array', items: { type: "string", 
                    enum: ['black', 'white', 'red', 'blue']} 
                },
                images : { 
                    type: 'array', items: { type: "string", format: "binary" }, 
                    description: 'لطفا از ارسال تصاویر با نام فارسی خود داری بفرمایید' 
                },
            },
        },
    })
    @UseInterceptors(FilesInterceptor('images', 10, multerConfig))
    updateProduct(@Param() productIdDto: ProductIdDTO, @Body() updateProductDto: UpdateProductDTO, @UploadedFiles() files, @Req() req) {
        const { id } = productIdDto;
        editPathImages(files, updateProductDto);
        req.body.colors = req.body?.colors.split(',').map(item => item.trim());
        return this.productService.updateProduct(updateProductDto, id);
    }
    @Delete(':id')
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'Id of the Product',
    })
    deleteProduct(@Param() productIdDto: ProductIdDTO): Promise<Product> {
        const { id } = productIdDto;
        return this.productService.deleteProductById(id);
    }
}
