import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntgModule } from './intg/intg.module';

@Module({
  imports: [IntgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
