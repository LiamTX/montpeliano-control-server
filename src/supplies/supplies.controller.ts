import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
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
    async findAll() {
        return await this.suppliesService.findAllAsync();
    }

    @Post()
    async create(@Body() supply: Supply) {
        return await this.suppliesService.create(supply);
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
