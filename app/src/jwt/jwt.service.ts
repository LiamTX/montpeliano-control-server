import { Injectable } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';
import { User } from '../users/user';

@Injectable()
export class JwtService {
    constructor() { }

    async generateToken(user: User): Promise<string> {
        return sign({ username: user.username }, process.env.TOKEN_SECRET, {
            expiresIn: 86400
        });
    }

    async decodeToken(token: string): Promise<any> {
        const decoded = verify(token, process.env.TOKEN_SECRET);
        return decoded;
    }
}
