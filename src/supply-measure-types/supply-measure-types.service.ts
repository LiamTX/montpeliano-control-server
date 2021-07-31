import { BadRequestException, Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { BaseService } from '../shared/base.service';
import { SupplyMeasureType } from './supply-measure-type';

@Injectable()
export class SupplyMeasureTypesService extends BaseService<SupplyMeasureType> {
    constructor(
        @InjectModel(SupplyMeasureType) private readonly supplyMeasureType: ReturnModelType<typeof SupplyMeasureType>
    ) {
        super(supplyMeasureType);
    }

    async create(supplyMeasureType: SupplyMeasureType) {
        const supplyTypeMeasureExists = await this.supplyMeasureType.findOne({
            $or: [{ code: supplyMeasureType.code }, { name: supplyMeasureType.name }]
        });
        if(supplyTypeMeasureExists) {
            throw new BadRequestException('supply_measure_type_already_exists');
        }

        return await this.supplyMeasureType.create(supplyMeasureType);
    }
}
