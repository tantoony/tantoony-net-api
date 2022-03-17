import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  config({
    path: __dirname
      .toString()
      .replace(__dirname.toString().split('/').pop(), './.env'),
  });
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors({
    origin: '*',
    methods: 'GET',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  await app.listen(5000, '127.0.0.1');
}

bootstrap();
