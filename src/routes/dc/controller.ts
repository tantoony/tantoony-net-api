import { Controller, Get, Query } from "@nestjs/common";
import { DcService } from "./service";

@Controller('dc')
export class DcController {
  constructor(private readonly service: DcService) {
  }

  @Get("basic")
  async basic(@Query() query): Promise<Record<any, any>> {
    console.log(query);
    console.log(query.code);
    const cod = await this.service.authBasic(query.code);
    console.log(cod);
    return await this.service.authBasic(query.code);
  }

}
