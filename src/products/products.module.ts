import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Product } from './product';
import { User } from 'src/users/user';
import { UsersService } from 'src/users/users.service';
import { JwtService } from 'src/jwt/jwt.service';

@Module({
  imports: [
    TypegooseModule.forFeature([Product, User])
  ],
  providers: [
    ProductsService,
    UsersService,
    JwtService
  ],
  controllers: [ProductsController]
})
export class ProductsModule {}
