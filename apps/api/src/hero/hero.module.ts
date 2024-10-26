import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ValidateHero } from 'src/validHeroes/validHeroes.service';
import { PrismaService } from '../database/prisma.service';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';

@Module({
  imports: [ConfigModule],
  controllers: [HeroController],
  providers: [HeroService, PrismaService, ValidateHero],
})
export class HeroModule {}
