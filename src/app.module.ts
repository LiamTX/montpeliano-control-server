import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogsModule } from './logs/logs.module';
import { SuppliesModule } from './supplies/supplies.module';
import { SupplyTypesModule } from './supply-types/supply-types.module';
import { SupplyMeasureTypesModule } from './supply-measure-types/supply-measure-types.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { JwtModule } from './jwt/jwt.module';

require('dotenv').config();

@Module({
  imports: [
    TypegooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    LogsModule,
    SuppliesModule,
    SupplyTypesModule,
    SupplyMeasureTypesModule,
    ProductsModule,
    UsersModule,
    JwtModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
