import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { Product } from './product';
import { ProductsService } from './products.service';

@UseGuards(AuthGuard)
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
