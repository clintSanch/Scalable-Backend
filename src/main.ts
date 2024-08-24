import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

import dotenv from 'dotenv';

process.env.NODE_ENV = 'production';
/**dotenv.config( if(process.env.NODE_ENV = 'production'){
  return { path: '/.env.production'}
} else if(process.env.NODE_ENV = 'staging'){
  return { path: '/.env.staging'}
} else if(process.env.NODE_ENV = 'development'){
  return { path: '/.env.development'}
});**/
dotenv.config({ path: '/.env.production' });

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: ['user', 'product'],
        protoPath: join(__dirname, ''),
        url: 'https://example.scalable-backend.com:5000',
      },
    },
  );
  // ValidationPipe enable auto-validation and ensure that all endpoints are protected from receiving incorrect data
  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
}
bootstrap();
