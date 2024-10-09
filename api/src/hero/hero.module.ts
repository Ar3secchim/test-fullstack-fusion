import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'src/database/prisma.service';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';

@Module({
  imports: [ConfigModule],
  controllers: [HeroController],
  providers: [HeroService, PrismaService],
})
export class HeroModule {}
