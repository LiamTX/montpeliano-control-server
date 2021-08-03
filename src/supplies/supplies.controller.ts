import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe, Query, Put, Param } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { ISupplyEntryDTO } from './dto/ISupplyEntry.dto';
import { ISupplyOutPutDTO } from './dto/ISupplyOutPut.dto';
import { SuppliesService } from './supplies.service';
import { Supply } from './supply';

@UseGuards(AuthGuard)
@UsePipes(ValidationPipe)
@Controller('supplies')
export class SuppliesController {
    constructor(private readonly suppliesService: SuppliesService) { }

    @Get()
    async findAll(@Query() filter: any) {
        return await (await this.suppliesService.findAllAsync(filter)).reverse();
    }

    @Post()
    async create(@Body() supply: Supply) {
        return await this.suppliesService.create(supply);
    }

    @Put()
    async update(@Body() supply_update: Supply) {
        return await this.suppliesService.updateSupply(supply_update);
    }

    @Post('/entry')
    async supplyEntry(@Body() supplyEntry: ISupplyEntryDTO) {
        return await this.suppliesService.supplyEntry(supplyEntry);
    }

    @Post('/output')
    async supplyOutPut(@Body() supplyOutPut: ISupplyOutPutDTO) {
        return await this.suppliesService.supplyOutPut(supplyOutPut);
    }
}
