import { Module } from "@nestjs/common";
import { IntgController } from "./intg.controller";
import { IntgService } from "./intg.service";
import { GitModule } from "./git/git.module";
import { DcModule } from "./dc/module";

@Module({
  controllers: [IntgController],
  providers: [IntgService],
  imports: [GitModule, DcModule]
})
export class IntgModule {
}
