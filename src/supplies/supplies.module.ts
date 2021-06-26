import { Module } from '@nestjs/common';
import { SuppliesService } from './supplies.service';
import { SuppliesController } from './supplies.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Supply } from './supply';
import { LogsService } from '../logs/logs.service';
import { Log } from '../logs/log';
import { JwtService } from '../jwt/jwt.service';
import { UsersService } from '../users/users.service';
import { User } from '../users/user';

@Module({
  imports: [
    TypegooseModule.forFeature([Supply]),
    TypegooseModule.forFeature([Log]),
    TypegooseModule.forFeature([User])
  ],
  providers: [SuppliesService, LogsService, JwtService, UsersService],
  controllers: [SuppliesController]
})
export class SuppliesModule { }
