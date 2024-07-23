import { AppController } from '@/application/app.controller';
import { AppService } from '@/core/use-case/app.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
