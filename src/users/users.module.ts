import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './user';
import { JwtService } from '../jwt/jwt.service';

@Module({
  imports: [
    TypegooseModule.forFeature([User])
  ],
  providers: [UsersService, JwtService],
  controllers: [UsersController]
})
export class UsersModule { }
