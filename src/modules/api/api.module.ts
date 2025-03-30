import { Module } from '@nestjs/common';
import { V1ApiModule } from './v1/v1.module';
import { ApiController } from './api.controller';

@Module({
  imports: [V1ApiModule],
  controllers: [ApiController],
  exports: [V1ApiModule],
})
export class ApiModule {}
