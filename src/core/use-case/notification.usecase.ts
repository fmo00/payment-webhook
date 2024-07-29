import { NotificationResponseDto } from '@/application/dto/notification-response.dto';
import { NotificationTopicEnum } from '@/core/enum/notification-topic.enum';
import { SnackbarServicePort } from '@/datasource/port/snackbar.port';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUsecase {
  constructor(private readonly snackbarAdapterService: SnackbarServicePort) {}

  async execute(id: string, topic: string): Promise<NotificationResponseDto> {
    if (this.isPaymentNotification(topic)) {
      return await this.sendPaymentNotification(id);
    }

    throw new BadRequestException();
  }

  private isPaymentNotification(topic: string): boolean {
    return NotificationTopicEnum['PAYMENT'] === topic;
  }

  private async sendPaymentNotification(
    id: string,
  ): Promise<NotificationResponseDto> {
    return await this.snackbarAdapterService.sendNotification(id);
  }
}
