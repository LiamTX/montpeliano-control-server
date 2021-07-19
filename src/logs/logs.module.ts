import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Log } from './log';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';
import { JwtService } from '../jwt/jwt.service';
import { UsersService } from '../users/users.service';
import { User } from '../users/user';

@Module({
  imports: [
    TypegooseModule.forFeature([Log, User])
  ],
  providers: [LogsService, JwtService, UsersService],
  controllers: [LogsController]
})
export class LogsModule { }
