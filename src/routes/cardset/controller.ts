import { Controller, Get, Post, Query, ValidationPipe } from '@nestjs/common';
import { DispService } from './service';
import { CardDoc } from "../../typing/declaration";

@Controller('cardset')
export class DispController {
    constructor(private readonly service: DispService) {
    }

    @Get()
    async basic(): Promise<{
        name: string,
        tags: string[],
        stars: number,
        suffix: string | null
    }[]> {
        return await this.service.show();
    }

    @Post()
    async update(@Query() query): Promise<Record<string, string>> {
        return await this.service.softCreate(query);
    }

}
