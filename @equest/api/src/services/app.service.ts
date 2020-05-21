import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World xd!';
  }
  getXD(): string {
    return 'Hello xdddd';
  }
}
