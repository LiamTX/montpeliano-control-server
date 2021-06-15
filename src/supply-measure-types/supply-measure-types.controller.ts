import { Body, Controller, Post } from '@nestjs/common';
import { SupplyMeasureType } from './supply-measure-type';
import { SupplyMeasureTypesService } from './supply-measure-types.service';

@Controller('supply-measure-types')
export class SupplyMeasureTypesController {
    constructor(private readonly supplyMeasureTypesService: SupplyMeasureTypesService) {}

    @Post()
    async create(@Body() supplyMeasureType: SupplyMeasureType) {
        return await this.supplyMeasureTypesService.create(supplyMeasureType);
    }
}
