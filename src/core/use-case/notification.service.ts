import { NotificationTopicEnum } from '@/core/enum/notification-topic.enum';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  async execute(id: string, topic: string): Promise<any> {
    //TODO: check notification type and send PUT to payment or order
    if (this.isPaymentNotification(topic)) {
      //TODO: implement datasource adapter call for payment PUT
      return;
    }

    if (this.isOrderNotification(topic)) {
      //TODO: implement datasource adapter call for order PUT
      return;
    }

    throw new BadRequestException();
  }

  private isPaymentNotification(topic: string): boolean {
    return NotificationTopicEnum['PAYMENT'] === topic;
  }

  private isOrderNotification(topic: string): boolean {
    return NotificationTopicEnum['ORDER'] === topic;
  }
}
