import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '../database/prisma.service';
import { ValidateHero } from '../validHeroes/validHeroes.service';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';

@Module({
  imports: [ConfigModule],
  controllers: [HeroController],
  providers: [HeroService, PrismaService, ValidateHero],
})
export class HeroModule {}
