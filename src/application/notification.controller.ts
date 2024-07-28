import { NotificationResponseDto } from '@/application/dto/notification-response.dto';
import { NotificationService } from '@/core/use-case/notification.service';
import { Controller, Post, Query } from '@nestjs/common';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('/notifications')
  async notify(
    @Query('topic') topic: string,
    @Query('id') id: string,
  ): Promise<NotificationResponseDto> {
    return await this.notificationService.execute(id, topic);
  }
}
