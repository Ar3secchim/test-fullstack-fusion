import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HeroModule } from './hero/hero.module';
import { ValidateHeroModule } from './validHeroes/validHeroes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '../.env'],
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
      exclude: ['api/*'],
    }),
    HeroModule,
    ValidateHeroModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
