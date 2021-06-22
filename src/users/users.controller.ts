import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('/auth')
    async auth(@Body() user: User) {
        return await this.usersService.auth(user);
    }

    @Post()
    async create(@Body() user: User) {
        return await this.usersService.create(user);
    }
}
