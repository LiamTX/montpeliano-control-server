import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { BaseService } from '../shared/base.service';
import { Product } from './product';

@Injectable()
export class ProductsService extends BaseService<Product> {
    constructor(
        @InjectModel(Product) private readonly productModel: ReturnModelType<typeof Product>
    ) {
        super(productModel);
    }
}
