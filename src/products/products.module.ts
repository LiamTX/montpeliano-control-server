import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Product } from './product';

@Module({
  imports: [
    TypegooseModule.forFeature([Product])
  ],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
