import { Body, Controller, Get, Post } from '@nestjs/common';
import { SupplyMeasureType } from './supply-measure-type';
import { SupplyMeasureTypesService } from './supply-measure-types.service';

@Controller('supply-measure-types')
export class SupplyMeasureTypesController {
    constructor(private readonly supplyMeasureTypesService: SupplyMeasureTypesService) {}

    @Get()
    async findAll() {
        return await this.supplyMeasureTypesService.findAllAsync();
    }

    @Post()
    async create(@Body() supplyMeasureType: SupplyMeasureType) {
        return await this.supplyMeasureTypesService.create(supplyMeasureType);
    }
}
