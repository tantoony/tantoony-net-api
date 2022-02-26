import { Controller, Get, Post, Query, ValidationPipe } from '@nestjs/common';
import { DispService } from './service';

@Controller('cardset')
export class DispController {
    constructor(private readonly service: DispService) {
    }

    @Get()
    async basic(@Query() query) {

    }

    @Post()
    async update(@Query() query) {
        return await this.service.softCreate(query)
    }

}
