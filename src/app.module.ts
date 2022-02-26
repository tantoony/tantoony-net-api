import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { DispModule } from "./routes/cardset/module";
import { DcModule } from "./routes/dc/module";
@Module({
    imports: [
        MongooseModule.forRoot('mongodb://45.146.161.197:27017/nest', {
            user: "Tantoony",
            pass: "kankabengüneşeyanıyom",
            authSource: "admin"
        }),
        DispModule,
        DcModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
