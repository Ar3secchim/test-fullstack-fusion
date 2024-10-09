import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { md5 } from 'js-md5';
import { PrismaService } from 'src/database/prisma.service';
import { HeroValidDto } from './dto/create-hero-valid.dto';

@Injectable()
export class ValidateHero {
  private apiInstance: AxiosInstance;

  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {
    this.apiInstance = this.createApiInstance();
  }

  private createApiInstance(): AxiosInstance {
    const privateKey = this.configService.get<string>('MARVEL_API_KEY_PRIVATE');
    const publicKey = this.configService.get<string>('MARVEL_API_KEY_PUBLIC');
    const baseUrl = this.configService.get<string>('BASE_URL_API');

    const timestamp = new Date().getTime();
    const hash = md5(timestamp + privateKey + publicKey);

    return axios.create({
      baseURL: baseUrl,
      params: {
        apikey: publicKey,
        hash,
        ts: timestamp,
      },
    });
  }

  async validateHeroAPI(nameHero: string): Promise<boolean> {
    try {
      const response = await this.apiInstance.get('/characters', {
        params: {
          nameStartsWith: nameHero,
        },
      });

      const data = response.data.data.results;
      console.log(data);

      if (data.length > 0) {
        return true;
      }

      return false;
    } catch (error) {
      throw new BadRequestException('Error validating hero with Marvel API');
    }
  }

  async create(heroValid: HeroValidDto) {
    const { name } = heroValid;

    const hero = await this.prismaService.heroesValidation.create({
      data: {
        name,
      },
    });
    return hero;
  }
}
