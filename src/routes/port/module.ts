import { Module } from '@nestjs/common';
import { PortService } from './service';
import { PortController } from "./controller";

@Module({
  providers: [PortService],
  controllers: [PortController]
})
export class PortModule {}
