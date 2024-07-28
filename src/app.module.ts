import { NotificationController } from '@/application/notification.controller';
import { NotificationService } from '@/core/use-case/notification.service';
import { DatasourceModule } from '@/datasource/datasource.module';
import { Module } from '@nestjs/common';

@Module({
  controllers: [NotificationController],
  imports: [DatasourceModule],
  providers: [NotificationService],
})
export class AppModule {}
