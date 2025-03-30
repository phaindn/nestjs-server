import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import configurations from './configurations';
// import { ConfigService } from './config.service';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
  ],
  // providers: [ConfigService],
})
export class ConfigModule {}
