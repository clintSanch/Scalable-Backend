import { Injectable } from '@nestjs/common';
import { LoginService } from 'src/common/user/services/login/login.service';

@Injectable()
export class AuthService {
  constructor(private loginService: LoginService) {}

  signIn() {
    return this.loginService.login('', '', '');
  }
}
