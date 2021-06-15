import { Module } from '@nestjs/common';
import { SupplyMeasureTypesService } from './supply-measure-types.service';
import { SupplyMeasureTypesController } from './supply-measure-types.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { SupplyMeasureType } from './supply-measure-type';

@Module({
  imports: [
    TypegooseModule.forFeature([SupplyMeasureType])
  ],
  providers: [SupplyMeasureTypesService],
  controllers: [SupplyMeasureTypesController]
})
export class SupplyMeasureTypesModule {}
