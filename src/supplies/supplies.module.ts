import { Module } from '@nestjs/common';
import { SuppliesService } from './supplies.service';
import { SuppliesController } from './supplies.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Supply } from './supply';
import { LogsService } from '../logs/logs.service';
import { Log } from '../logs/log';

@Module({
  imports: [
    TypegooseModule.forFeature([Supply]),
    TypegooseModule.forFeature([Log])
  ],
  providers: [SuppliesService, LogsService],
  controllers: [SuppliesController]
})
export class SuppliesModule {}
