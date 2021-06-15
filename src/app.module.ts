import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogsModule } from './logs/logs.module';
import { SuppliesModule } from './supplies/supplies.module';
import { SupplyTypesModule } from './supply-types/supply-types.module';
import { SupplyMeasureTypesModule } from './supply-measure-types/supply-measure-types.module';
import { ProductModule } from './product/product.module';
import { ProductsModule } from './products/products.module';

require('dotenv').config();

@Module({
  imports: [
    TypegooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    LogsModule,
    SuppliesModule,
    SupplyTypesModule,
    SupplyMeasureTypesModule,
    ProductModule,
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
