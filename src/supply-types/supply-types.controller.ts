import { Body, Controller, Post } from '@nestjs/common';
import { SupplyType } from './supply-type';
import { SupplyTypesService } from './supply-types.service';

@Controller('supply-types')
export class SupplyTypesController {
    constructor(private readonly supplyTypesService: SupplyTypesService) {}

    @Post()
    async create(@Body() supplyType: SupplyType) {
        return await this.supplyTypesService.create(supplyType);
    }
}
