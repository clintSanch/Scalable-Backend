import { Controller, Get, Post, Req, Res, Body, Param } from '@nestjs/common';
import { LoginService } from '../../services/login/login.service';
import { RegisterService } from '../../services/register/register.service';
import { Request, request, response } from 'express';
import { UserDetails } from 'src/models/user/user-details/user-details';
import { OtherService } from '../../services/other/other.service';

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
  getUser(@Req() request: Request) {
    return;
  }

  /* post request*/
  @Post('register')
  addUser(@Body() userDto: UserDetails) {
    return this.registerservice.registerUser(userDto);
  }

  @Post('login')
  login(@Body() userDTO: UserDetails){

    return;
  }

  @Get('id/profile')
  getUserProfile(@Param('id') userId: number): UserDetails{

    const user = this.otherservice.findUserById(userId);

    const userProfileDTO = new UserDetails();
    const userProfileDTO.username = user.name;
    const userProfileDTO.email = user.email;
    
    return userProfileDTO;
  }
}
