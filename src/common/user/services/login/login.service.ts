import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/database/userEntity/user.entity';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async login(username: string, email: string, password: string): Promise<any> {
    try {
      const user = await this.userRepo.findOneBy({
        username: Equal(''),
      });
      if (user?.password == password && user?.email == email) {
        const payload = {
          sub: user.id,
          username: user.username,
          email: user.email,
          aud: [
            'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
            'https://openapiuat.airtel.africa',
          ],
        };

        return {
          access_token: this.jwtService.signAsync(payload),
          username,
          email,
        };
      }
    } catch (error) {
      if (error instanceof HttpException) {
        throw new UnauthorizedException();
      }
      return error;
      console.error(`Error, ${error.message}`);
    }
  }

  getRefreshToken() {}
}
