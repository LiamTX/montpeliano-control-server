import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { BaseService } from '../shared/base.service';
import { Log } from './log';

@Injectable()
export class LogsService extends BaseService<Log> {
    constructor(
        @InjectModel(Log) private readonly logModel: ReturnModelType<typeof Log>
    ) {
        super(logModel);
    }
}
