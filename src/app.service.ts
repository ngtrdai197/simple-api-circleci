import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  getHello(): string {
    this.logger.debug('Hello func');
    return 'Hello World!';
  }

  public getMe() {
    this.logger.debug('getMe func');
    return {
      name: 'Dai Nguyen Update',
      phone: '0375629888',
      age: 24,
      city: 'HCMC',
      gender: 'Male',
    };
  }
}
