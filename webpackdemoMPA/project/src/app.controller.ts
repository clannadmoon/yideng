import { Controller, Render, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index.html')
  getHello(): object {
    return { message: this.appService.getHello() };
  }
}
