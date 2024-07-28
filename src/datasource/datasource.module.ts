import { Module } from '@nestjs/common';
import { SnackbarApiAdapter } from './adapter/snackbar-adapter.service';
import { SnackbarServicePort } from './port/snackbar.port';

@Module({
  imports: [],
  providers: [
    {
      provide: SnackbarServicePort,
      useClass: SnackbarApiAdapter,
    },
  ],
  exports: [SnackbarServicePort],
})
export class DatasourceModule {}
