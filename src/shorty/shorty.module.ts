import { Module } from '@nestjs/common';
import { ShortyController } from './shorty.controller';
import { ShortyService } from './shorty.service';

@Module({
    controllers: [ShortyController],
    providers: [ShortyService],
})
export class ShortyModule {}
