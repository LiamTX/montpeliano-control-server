import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from './product';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async findAll() {
        return await this.productsService.findAllAsync();
    }

    @Post()
    async create(@Body() product: Product) {
        return await this.productsService.create(product);
    }
}
