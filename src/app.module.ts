import { NotificationController } from '@/application/notification.controller';
import { DatasourceModule } from '@/datasource/datasource.module';
import { Module } from '@nestjs/common';
import { NotificationUsecase } from '@/core/use-case/notification.usecase';

@Module({
  controllers: [NotificationController],
  imports: [DatasourceModule],
  providers: [NotificationUsecase],
})
export class AppModule {}
