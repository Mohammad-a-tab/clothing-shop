import { Controller } from '@nestjs/common';

@Controller('products')
export class ProductController {
    constructor(
        private readonly product
    ) { }
}
