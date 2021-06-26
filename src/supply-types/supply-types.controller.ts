import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { SupplyType } from './supply-type';
import { SupplyTypesService } from './supply-types.service';

@UseGuards(AuthGuard)
@Controller('supply-types')
export class SupplyTypesController {
    constructor(private readonly supplyTypesService: SupplyTypesService) {}

    @Get()
    async findAll() {
        return await this.supplyTypesService.findAllAsync();
    }

    @Post()
    async create(@Body() supplyType: SupplyType) {
        return await this.supplyTypesService.create(supplyType);
    }
}
