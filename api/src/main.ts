import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: `${process.env.URL_WEB}`,
    methods: ['GET', 'DELETE', 'PUT'],
    credentials: true,
  });

  await app.listen(5000);
}
bootstrap();
