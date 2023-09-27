import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { LoginService } from '../../services/login/login.service';
import { RegisterService } from '../../services/register/register.service';
import { Request, request, response } from 'express';

/** user.controller.ts is responsible for accepting HTTP requests from the client and providing a response*/
@Controller('/user')
export class UserController {

    constructor(private readonly loginservice: LoginService, private readonly registerservice: RegisterService){}
    
    /**get request */
    @Get()
    getUser(@Req() request: Request){ return}

    /* post request*/
    @Post()
    addUser(@Req() request: Request){ return this.registerservice}
}