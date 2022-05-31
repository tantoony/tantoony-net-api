import { Module } from '@nestjs/common';
import { DcService } from './service';
import { DcController } from './controller';

@Module({
  providers: [DcService],
  controllers: [DcController],
})
export class DcModule {}
