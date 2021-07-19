import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { format } from 'date-fns';
import { InjectModel } from 'nestjs-typegoose';
import { PROCESS_MESSAGES } from '../logs/log';
import { LogsService } from '../logs/logs.service';
import { BaseService } from '../shared/base.service';
import { ISupplyEntryDTO } from './dto/ISupplyEntry.dto';
import { ISupplyOutPutDTO } from './dto/ISupplyOutPut.dto';
import { Supply } from './supply';

@Injectable()
export class SuppliesService extends BaseService<Supply> {
    constructor(
        @InjectModel(Supply) private readonly supplyModel: ReturnModelType<typeof Supply>,
        private readonly logService: LogsService
    ) {
        super(supplyModel);
    }

    async supplyEntry({ code, qty, value }: ISupplyEntryDTO) {
        const supply = await this.supplyModel.findOne({ code });
        if (!supply) {
            throw new HttpException('supply_not_found', HttpStatus.NOT_FOUND);
        }

        supply.qty += qty;
        await this.update(supply._id, supply);

        this.logService.create({
            message: PROCESS_MESSAGES.SUPPLY_ENTRY,
            targetCode: supply.code,
            targetName: supply.name,
            value
        });
    }

    async supplyOutPut({ code, qty }: ISupplyOutPutDTO) {
        const supply = await this.supplyModel.findOne({ code });
        if (!supply) {
            throw new HttpException('supply_not_found', HttpStatus.NOT_FOUND);
        }

        // TODO verify if supply qty go to < 0
        supply.qty -= qty;
        await this.update(supply._id, supply);

        this.logService.create({
            message: PROCESS_MESSAGES.SUPPLY_OUTPUT,
            targetCode: supply.code,
            targetName: supply.name
        });
    }
}
