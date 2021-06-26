import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { BaseService } from '../shared/base.service';
import { SupplyType } from './supply-type';

@Injectable()
export class SupplyTypesService extends BaseService<SupplyType> {
    constructor(
        @InjectModel(SupplyType) private readonly supplyTypeModel: ReturnModelType<typeof SupplyType>
    ) {
        super(supplyTypeModel);
    }
}
