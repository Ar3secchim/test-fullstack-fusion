import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HeroModule } from './hero/hero.module';
import { ValidateHeroModule } from './validHeroes/validHeroes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HeroModule,
    ValidateHeroModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
