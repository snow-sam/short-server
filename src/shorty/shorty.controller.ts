import { Controller, Get, Post, Body, Param, Redirect } from '@nestjs/common';
import { CreateUrlDto } from './dto/createShortUrl';
import { ShortyService } from './shorty.service';

@Controller('shorty')
export class ShortyController {
    constructor(private shortyService: ShortyService) {}

    @Get(':hashUrl')
    @Redirect()
    redirectUrl(@Param('hashUrl') hashUrl: string) {
        return this.shortyService.redirectUrl(hashUrl)
    }

    @Post()
    shortUrl(@Body() body: CreateUrlDto) {
        const ogUrl = body.url
        return this.shortyService.shortUrl(ogUrl)
    }
}
