import { Module } from '@nestjs/common';
import { SuppliesService } from './supplies.service';
import { SuppliesController } from './supplies.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Supply } from './supply';

@Module({
  imports: [
    TypegooseModule.forFeature([Supply])
  ],
  providers: [SuppliesService],
  controllers: [SuppliesController]
})
export class SuppliesModule {}
