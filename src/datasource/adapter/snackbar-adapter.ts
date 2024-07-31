import { NotificationResponseDto } from '@/application/dto/notification-response.dto';
import { SnackbarServicePort } from '@/datasource/port/snackbar.port';
import axios from 'axios';

export class SnackbarApiAdapter implements SnackbarServicePort {
  constructor() {}

  api = axios.create({
    baseURL: 'http://snack-bar-api:3000/api/v1',
  });

  async sendNotification(id: string): Promise<NotificationResponseDto> {
    try {
      const response = (await this.api.patch(`/payments/${id}`)).data;
      return { message: 'Notification was registered successfully'} 
    } catch (error) {
      console.log(error);
      return { message: 'Snackbar API is out of service'}
    }
  }
}
