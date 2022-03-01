import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CardDoc } from "../../typing/declaration";

@Injectable()
export class DispService {
    constructor(@InjectModel("cardsets") private cardModel: Model<CardDoc>) {
    }

    async show(): Promise<CardDoc[]> {
        const myCard = await this.cardModel.find();
        return myCard;
    }

    async softCreate({ name, tags, stars }): Promise<Record<string, string>> {
        await this.cardModel.create({
            name,
            tags: tags.split('.'),
            stars
        });
        return {
            "Process": "Done"
        }
    }

}
