import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { LoginService } from '../../services/login/login.service';
import { RegisterService } from '../../services/register/register.service';
import { UserDetails } from 'src/models/user/user-details/user-details';
import { OtherService } from '../../services/other/other.service';
import { UserProfileDTO } from '../../Dtos/profileDTO';
import { CreateUserDTO } from '../../Dtos/userDTO';
import { LoginDto } from '../../Dtos/loginDTO';

/** user.controller.ts is responsible for accepting HTTP requests from the client and providing a response*/
@Controller('user')
export class UserController {
  constructor(
    private readonly loginservice: LoginService,
    private readonly registerservice: RegisterService,
    private readonly otherservice: OtherService,
  ) {}

  /**get request */
  @Get('id')
  @HttpCode(HttpStatus.OK)
  async getUser(userId: number): Promise<UserDetails> {
    const user = await this.otherservice.findUserById(userId);
    return user;
  }

  /** post request or creating new records*/
  @Post('/signUp')
  @HttpCode(HttpStatus.OK)
  async addUser(@Body() userDto: CreateUserDTO): Promise<CreateUserDTO> {
    const data = await this.registerservice.registerUser(userDto);
    return data;
  }

  @Post('/signIn')
  @HttpCode(HttpStatus.OK)
  login(@Body() loginDto: LoginDto): Promise<LoginDto> {
    return this.loginservice.login(
      loginDto.username,
      loginDto.email,
      loginDto.password,
    );
  }

  @Get('id/profile')
  @HttpCode(HttpStatus.OK)
  async getUserProfile(
    @Param('id') profileDto: UserProfileDTO,
  ): Promise<UserProfileDTO> {
    const user = this.otherservice.findUserByEmail();
    return user;
  }

  @Get('')
  getUserLocation() {
    return this;
  }

  @Get('logout')
  logout() {
    return;
  }
}
