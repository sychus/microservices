import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { SumService } from './sum.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [SumService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
  // todo
  });
});
