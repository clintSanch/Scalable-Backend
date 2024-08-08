import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('Home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // getHome() renders mapped route to home page
  @Get()
  getHome(@Res() response) {
    return response.render();
  }
}
