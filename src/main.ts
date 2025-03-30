import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import configurations from './configs/default';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = configurations().app.port;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/api`);
}
bootstrap();
