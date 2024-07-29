import { NotificationResponseDto } from '@/application/dto/notification-response.dto';
import { NotificationUsecase } from '@/core/use-case/notification.usecase';
import { Controller, Post, Query } from '@nestjs/common';

@Controller()
export class NotificationController {
  constructor(private readonly notificationUsecase: NotificationUsecase) {}

  @Post('/notifications')
  async notify(
    @Query('topic') topic: string,
    @Query('id') id: string,
  ): Promise<NotificationResponseDto> {
    return await this.notificationUsecase.execute(id, topic);
  }
}
