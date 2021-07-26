import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { LogsService } from './logs.service';

@UseGuards(AuthGuard)
@Controller('logs')
export class LogsController {
    constructor(private logsService: LogsService) { }

    @Get()
    async findAll(@Query() filter: any) {
        return await (await this.logsService.findAllAsync(filter)).reverse();
    }
}
