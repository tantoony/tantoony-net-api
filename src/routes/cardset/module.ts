import { Module } from '@nestjs/common';
import { DispService } from './service';
import { DispController } from './controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CardSchema } from '../../typing/declaration';

@Module({
  controllers: [DispController],
  imports: [
    MongooseModule.forFeature([{ name: 'cardsets', schema: CardSchema }]),
  ],
  providers: [DispService],
})
export class DispModule {}
