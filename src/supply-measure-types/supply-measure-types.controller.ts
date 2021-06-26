import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { SupplyMeasureType } from './supply-measure-type';
import { SupplyMeasureTypesService } from './supply-measure-types.service';

@UseGuards(AuthGuard)
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
