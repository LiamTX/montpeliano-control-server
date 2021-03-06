import { Module } from '@nestjs/common';
import { SupplyTypesService } from './supply-types.service';
import { SupplyTypesController } from './supply-types.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { SupplyType } from './supply-type';
import { User } from '../users/user';
import { JwtService } from '../jwt/jwt.service';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    TypegooseModule.forFeature([SupplyType, User])
  ],
  providers: [
    SupplyTypesService,
    JwtService,
    UsersService
  ],
  controllers: [SupplyTypesController]
})
export class SupplyTypesModule {}
