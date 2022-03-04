import { Controller, Get, Query } from "@nestjs/common";
import { PortService } from "./service";

@Controller('port')
export class PortController {
  constructor(private readonly service: PortService) {
  }

  @Get()
  async basic(@Query() query): Promise<Record<any, any>> {
    console.log(query);
    console.log(query.code);
    const cod = await this.service.authBasic(query.code);
    console.log(cod);
    return await this.service.authBasic(query.code);
  }

}
