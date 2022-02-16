import { Controller, Get, Query } from "@nestjs/common";
import { DcService } from "./service";

@Controller('dc')
export class DcController {
  constructor(private readonly service: DcService) {
  }

  @Get("basic")
  async basic(@Query() query): Promise<Record<any, any>> {
    return await this.service.authBasic(query.code);
  }

}
