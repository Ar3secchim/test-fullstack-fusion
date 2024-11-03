import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import * as crypto from 'crypto';
import { HeroValidDto } from './dto/create-hero-valid.dto';

@Injectable()
export class ValidateHero {
  private readonly baseUrl = 'https://gateway.marvel.com/v1/public/characters';

  constructor(private readonly configService: ConfigService) {}

  private getMarvelHash(timestamp: string): string {
    const publicKey = this.configService.get<string>('MARVEL_PUBLIC_KEY');
    const privateKey = this.configService.get<string>('MARVEL_PRIVATE_KEY');

    return crypto
      .createHash('md5')
      .update(timestamp + privateKey + publicKey)
      .digest('hex');
  }

  async execute(heroValid: HeroValidDto) {
    const { name } = heroValid;

    const timestamp = new Date().getTime().toString();
    const publicKey = this.configService.get<string>('MARVEL_PUBLIC_KEY');
    const hash = this.getMarvelHash(timestamp);

    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          name,
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
        },
      });

      const url =
        response.data.data.results[0].thumbnail.path +
        '.' +
        response.data.data.results[0].thumbnail.extension;

      return {
        heroExist: response.data.data.results.length > 0,
        url,
      };
    } catch (error) {
      throw error;
    }
  }
}
