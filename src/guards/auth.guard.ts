import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { JwtService } from "src/jwt/jwt.service";
import { UsersService } from "src/users/users.service";

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
            throw new HttpException('missing_header', HttpStatus.UNAUTHORIZED);
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
            console.log(decoded);
            console.log(user);
            if (!user) {
                throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED);
            }
        }).catch(err => {
            throw new HttpException('err_to_verify_token', HttpStatus.UNAUTHORIZED);
        });

        return true;
    }

}