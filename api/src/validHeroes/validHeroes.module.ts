import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'src/database/prisma.service';
import { ValidateHeroController } from './validHero.controller';
import { ValidateHero } from './validHeroes.service';

@Module({
  imports: [ConfigModule],
  controllers: [ValidateHeroController],
  providers: [ValidateHero, PrismaService],
})
export class ValidateHeroModule {}
