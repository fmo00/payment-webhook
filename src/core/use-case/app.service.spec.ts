import { AppService } from '@/core/use-case/app.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  describe('AppService', () => {
    it('service should be defined', async () => {
      expect(service).toBeDefined();
    });
  });
});
