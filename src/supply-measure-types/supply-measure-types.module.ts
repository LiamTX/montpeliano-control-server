import { Module } from '@nestjs/common';
import { SupplyMeasureTypesService } from './supply-measure-types.service';
import { SupplyMeasureTypesController } from './supply-measure-types.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { SupplyMeasureType } from './supply-measure-type';
import { User } from 'src/users/user';
import { UsersService } from 'src/users/users.service';
import { JwtService } from 'src/jwt/jwt.service';

@Module({
  imports: [
    TypegooseModule.forFeature([SupplyMeasureType, User])
  ],
  providers: [
    SupplyMeasureTypesService,
    UsersService,
    JwtService
  ],
  controllers: [SupplyMeasureTypesController]
})
export class SupplyMeasureTypesModule {}
