import { NotificationResponseDto } from '@/application/dto/notification-response.dto';
import { NotificationTypeEnum } from '@/core/enum/notification-type.enum';
import { SnackbarServicePort } from '@/datasource/port/snackbar.port';

export class NotificationUsecase {
  constructor(private readonly snackbarAdapterService: SnackbarServicePort) {}

  async execute(id: string, type: string): Promise<NotificationResponseDto> {
    if (this.isPaymentNotification(type)) {
      await this.sendPaymentNotification(id);
      return { message: 'Notification sent successfully' };
    }

    return { message: 'Not supported topic' };
  }

  private isPaymentNotification(type: string): boolean {
    return NotificationTypeEnum['PAYMENT'] === type;
  }

  private async sendPaymentNotification(
    id: string,
  ): Promise<NotificationResponseDto> {
    return await this.snackbarAdapterService.sendNotification(id);
  }
}
