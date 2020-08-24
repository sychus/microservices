import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SumService } from './sum.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [SumService],
})
export class AppModule {}
