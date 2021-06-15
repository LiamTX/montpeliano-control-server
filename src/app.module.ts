import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogsModule } from './logs/logs.module';
import { SuppliesModule } from './supplies/supplies.module';

require('dotenv').config();

@Module({
  imports: [
    TypegooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    LogsModule,
    SuppliesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
