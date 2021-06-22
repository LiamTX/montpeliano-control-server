import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { User } from '../users/user';

@Injectable()
export class JwtService {
    constructor() { }

    async generateToken(user: User): Promise<string> {
        return sign({ id: user.username }, process.env.TOKEN_SECRET, {
            expiresIn: 86400
        });
    }
}
