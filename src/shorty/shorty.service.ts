import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class ShortyService {
    private readonly urls: Map<number, { ogUrl: string, shortUrl: string, hashValue: string }> = new Map();
    private readonly prefix: string = 'https://3000-idx-nest-js-1741068842369.cluster-ve345ymguzcd6qqzuko2qbxtfe.cloudworkstations.dev/shorty/'

    redirectUrl(hashUrl: string) {
        const fullShortUrl = this.prefix + hashUrl
        const url = [...this.urls.values()].filter(({ shortUrl }) => shortUrl === fullShortUrl)[0]?.ogUrl
        return {url}
    }

    shortUrl(ogUrl: string) {
        const res = [...this.urls.values()].filter((reg) => ogUrl === reg.ogUrl)
        if (res.length === 1) return res[0]

        const uuid = v4();
        let numericID = [...uuid].reduce((acc, ch) => acc + ch.charCodeAt(0), 0)

        // we have generated the short hashValue
        const hashValue = Buffer.from(numericID.toString()).toString('base64url');

        const shortUrl = this.prefix + hashValue;

        const newReg = { ogUrl, shortUrl, hashValue}
        this.urls.set(this.urls.size, newReg)

        return newReg
    }
}