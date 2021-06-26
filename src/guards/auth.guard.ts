import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "../jwt/jwt.service";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly jwtSevice: JwtService,
        private readonly usersService: UsersService,
        private reflector: Reflector
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();

        const header = req.header('Authorization');
        if (!header) {
            throw new HttpException('authorization_required', HttpStatus.UNAUTHORIZED);
        };

        const parts = header.split(' ');
        if (parts.length < 2) {
            throw new HttpException('header_auth_badly_formated', HttpStatus.UNAUTHORIZED);
        };

        const [scheme, token] = parts;
        if (!/^Bearer$/i.test(scheme)) {
            throw new HttpException('not_bearer_type', HttpStatus.UNAUTHORIZED);
        };

        await this.jwtSevice.decodeToken(token).then(async decoded => {
            const user = await this.usersService.findOne({ username: decoded.username });
            if (!user) {
                throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED);
            }
        }).catch(err => {
            console.log(err);
            throw new HttpException(`${err.message}`, HttpStatus.UNAUTHORIZED);
        });

        return true;
    }

}