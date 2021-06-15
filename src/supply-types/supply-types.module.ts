import { Module } from '@nestjs/common';
import { SupplyTypesService } from './supply-types.service';
import { SupplyTypesController } from './supply-types.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { SupplyType } from './supply-type';

@Module({
  imports: [
    TypegooseModule.forFeature([SupplyType])
  ],
  providers: [SupplyTypesService],
  controllers: [SupplyTypesController]
})
export class SupplyTypesModule {}
