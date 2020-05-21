import { Controller, Get } from '@nestjs/common';

import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('hello');
    return this.appService.getHello();
  }

  @Get('xd')
  getXD(): string {
    return this.appService.getXD();
  }
}
