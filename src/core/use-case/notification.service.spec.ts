import { NotificationService } from '@/core/use-case/notification.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppService', () => {
  let service: NotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationService],
    }).compile();

    service = module.get<NotificationService>(NotificationService);
  });

  describe('AppService', () => {
    it('service should be defined', async () => {
      expect(service).toBeDefined();
    });
  });
});
