import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  login(@Body() body: any): string {
    return this.appService.login(body);
  }

  @Post('sign-up')
  signUp(@Body() body: any): any {
    return true;
  }
}
