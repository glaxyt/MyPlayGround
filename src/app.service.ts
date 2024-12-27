import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  // hi
  login(body: any): string {
    return `Hello ${body.email}!`;
  }
}
