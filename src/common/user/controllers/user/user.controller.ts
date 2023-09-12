import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { LoginService } from '../../services/login/login.service';
import { RegisterService } from '../../services/register/register.service';
import { Request, request, response } from 'express';

@Controller('/user')
export class UserController {

    constructor(private readonly loginservice: LoginService, private readonly registerservice: RegisterService){}
    
    @Get()
    getUser(@Req() request: Request){ return}

    @Post()
    addUser(@Req() request: Request){ return this.registerservice}
}
