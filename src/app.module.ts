import { NotificationController } from '@/application/notification.controller';
import { NotificationService } from '@/core/use-case/notification.service';
import { DatasourceModule } from '@/datasource/datasource.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatasourceModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class AppModule {}
