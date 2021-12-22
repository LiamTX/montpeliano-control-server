import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { format } from 'date-fns';
import { InjectModel } from 'nestjs-typegoose';
import { mapSeries } from 'p-iteration';
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

    async create(supply: Supply) {
        const supplyAlreadyExists = await this.supplyModel.findOne({
            $or: [{ code: supply.code }, { name: supply.name }]
        });
        if (supplyAlreadyExists) {
            throw new HttpException('supply_already_exists', HttpStatus.BAD_REQUEST);
        }

        return this.supplyModel.create(supply);
    }

    async supplyEntry({ code, qty }: ISupplyEntryDTO) {
        const supply = await this.supplyModel.findOne({ code });
        if (!supply) {
            throw new HttpException('supply_not_found', HttpStatus.NOT_FOUND);
        }

        // supply.qty += parseFloat(qty);
        // console.log(supply.value);
        // const count = supply.value / 0.300;

        // console.log(count);

        // supply.valueQty = (count) + supply.valueQty;

        console.log(supply.value)
        console.log(Number(qty));

        supply.qty += Number(qty);
        const count = supply.value / supply.qty;

        console.log(count);

        // await this.update(supply._id, supply);

        // await this.logService.create({
        //     message: PROCESS_MESSAGES.SUPPLY_ENTRY,
        //     targetCode: supply.code,
        //     targetName: supply.name
        // });
    }

    async supplyOutPut({ code, qty }: ISupplyOutPutDTO) {
        const supply = await this.supplyModel.findOne({ code });
        if (!supply) {
            throw new HttpException('supply_not_found', HttpStatus.NOT_FOUND);
        }

        if (supply.qty == 0) {
            throw new HttpException('supply_qty_null', HttpStatus.BAD_REQUEST);
        }

        // supply.qty -= parseFloat(qty);
        // const count = supply.value / parseFloat(qty);
        // supply.valueQty = (count) - supply.valueQty;

        supply.qty -= Number(qty);
        const count = supply.value / supply.qty;
        console.log(count);

        await this.update(supply._id, supply);

        await this.logService.create({
            message: PROCESS_MESSAGES.SUPPLY_OUTPUT,
            targetCode: supply.code,
            targetName: supply.name
        });
    }

    async updateSupply(supply_update: Supply) {
        const supply = await this.supplyModel.findOne({ code: supply_update.code });
        if (!supply) {
            throw new HttpException('supply_not_found', HttpStatus.NOT_FOUND);
        }

        await this.supplyModel.updateOne({ _id: supply._id }, supply_update);
    }
}
