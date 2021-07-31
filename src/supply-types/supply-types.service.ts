import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
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

    async create(supplyType: SupplyType) {
        const supplyTypeExists = await this.supplyTypeModel.findOne({
            $or: [{ code: supplyType.code }, { name: supplyType.name }]
        });
        if(supplyTypeExists) {
            throw new BadRequestException('supply_type_already_exists');
        }

        return await this.supplyTypeModel.create(supplyType);
    }
}
