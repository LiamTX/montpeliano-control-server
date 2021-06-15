import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { BaseService } from 'src/shared/base.service';
import { Supply } from './supply';

@Injectable()
export class SuppliesService extends BaseService<Supply> {
    constructor(
        @InjectModel(Supply) private readonly supplyModel: ReturnModelType<typeof Supply>
    ) {
        super(supplyModel);
    }
}
