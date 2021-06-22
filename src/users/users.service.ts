import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { compareSync } from 'bcrypt';
import { InjectModel } from 'nestjs-typegoose';
import { JwtService } from 'src/jwt/jwt.service';
import { BaseService } from '../shared/base.service';
import { User } from './user';

@Injectable()
export class UsersService extends BaseService<User> {
    constructor(
        @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
        private readonly jwtService: JwtService
    ) {
        super(userModel);
    }

    async auth(user: User) {
        const userExists = await this.userModel.findOne({ username: user.username });
        if (!userExists) {
            throw new HttpException('user_not_found', HttpStatus.NOT_FOUND);
        }

        if (!compareSync(user.password, userExists.password)) {
            throw new HttpException('credentials_invalid', HttpStatus.UNAUTHORIZED);
        }

        return { token: await this.jwtService.generateToken(userExists) };
    }
}
