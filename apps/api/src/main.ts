import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: `http://localhost:3000/`,
    methods: ['GET', 'DELETE', 'PUT'],
    credentials: true,
  });
  app.setGlobalPrefix('/api');

  await app.listen(5000);
}
bootstrap();
