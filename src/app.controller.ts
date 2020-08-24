import { Controller, Logger } from '@nestjs/common';
import { SumService } from './sum.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly sumService: SumService) {}

  @MessagePattern('add')
  async accumulate(data: number[]) {
    this.logger.log('Suma ' + data.toString());
    return this.sumService.accumulate(data);
  }
}
