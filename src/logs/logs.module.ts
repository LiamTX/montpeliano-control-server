import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Log } from './log';
import { LogsService } from './logs.service';

@Module({
  imports: [
    TypegooseModule.forFeature([Log])
  ],
  providers: [LogsService]
})
export class LogsModule { }
