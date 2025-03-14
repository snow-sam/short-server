import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortyModule } from './shorty/shorty.module';

@Module({
  imports: [ShortyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
