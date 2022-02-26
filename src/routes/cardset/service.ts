import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CardDoc } from "../../typing/declaration";

@Injectable()
export class DispService {
    constructor(@InjectModel("cardsets") private cardModel: Model<CardDoc>) {
    }

    async softCreate({ name, tags, stars }) {
        await this.cardModel.create({
            name,
            tags: tags.split('.'),
            stars
        });
    }

}
