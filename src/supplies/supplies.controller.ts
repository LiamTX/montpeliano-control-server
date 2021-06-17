import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SuppliesService } from './supplies.service';
import { Supply } from './supply';

@UsePipes(ValidationPipe)
@Controller('supplies')
export class SuppliesController {
    constructor(private readonly suppliesService: SuppliesService) { }

    @Get()
    async findAll() {
        return await this.suppliesService.findAllAsync();
    }

    @Post()
    async create(@Body() supply: Supply) {
        return await this.suppliesService.create(supply);
    }
}
