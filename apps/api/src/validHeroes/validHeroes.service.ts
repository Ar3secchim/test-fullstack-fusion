import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosInstance } from 'axios';
import { PrismaService } from '../database/prisma.service';
import { HeroValidDto } from './dto/create-hero-valid.dto';

@Injectable()
export class ValidateHero {
  private apiInstance: AxiosInstance;

  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {}

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
