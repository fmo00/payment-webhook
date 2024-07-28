import { NotificationResponseDto } from '@/application/dto/notification-response.dto';

export abstract class SnackbarServicePort {
  abstract sendNotification(id: string): Promise<NotificationResponseDto>;
}
