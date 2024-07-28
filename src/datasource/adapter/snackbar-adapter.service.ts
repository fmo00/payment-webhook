import { NotificationResponseDto } from '@/application/dto/notification-response.dto';
import { SnackbarServicePort } from '@/datasource/port/snackbar.port';
import { InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';

export class SnackbarApiAdapter implements SnackbarServicePort {
  constructor() {}

  api = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
  });

  async sendNotification(id: string): Promise<NotificationResponseDto> {
    try {
      return await this.api.patch(`/payments/${id}`);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException({
        description: 'Snackbar API is out of service',
      });
    }
  }
}
