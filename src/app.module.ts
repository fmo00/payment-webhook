import { NotificationController } from '@/application/notification.controller';
import { Module } from '@nestjs/common';
import { NotificationUsecase } from '@/core/use-case/notification.usecase';
import { SnackbarServicePort } from '@/datasource/port/snackbar.port';
import { SnackbarApiAdapter } from '@/datasource/adapter/snackbar-adapter';

@Module({
  controllers: [NotificationController],
  imports: [],
  providers: [
    {
      provide: SnackbarServicePort,
      useClass: SnackbarApiAdapter,
    },
    {
      provide: NotificationUsecase,
      useFactory: (
        snackbarAdapterService: SnackbarServicePort,
      ) => {
        return new NotificationUsecase(snackbarAdapterService);
      },
      inject: [SnackbarServicePort],
    },
  ],
})
export class AppModule {}
