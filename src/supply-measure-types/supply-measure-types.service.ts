import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { BaseService } from 'src/shared/base.service';
import { SupplyMeasureType } from './supply-measure-type';

@Injectable()
export class SupplyMeasureTypesService extends BaseService<SupplyMeasureType> {
    constructor(
        @InjectModel(SupplyMeasureType) private readonly supplyMeasureType: ReturnModelType<typeof SupplyMeasureType>
    ) {
        super(supplyMeasureType);
    }
}
