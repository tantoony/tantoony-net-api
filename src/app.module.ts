import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { DispModule } from "./routes/cardset/module";
import { DcModule } from "./routes/dc/module";
import { PortModule } from "./routes/port/module";
@Module({
    imports: [
        MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest', {
            user: "Tantoony",
            pass: "dU++%_6u69",
            authSource: "admin"
        }),
        DispModule,
        DcModule,
        PortModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
