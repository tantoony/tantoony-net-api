import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CardDoc } from "../../typing/declaration";

@Injectable()
export class DispService {
    constructor(@InjectModel("cardsets") private cardModel: Model<CardDoc>) {
    }

    async show(): Promise<{
        name: string,
        tags: string[],
        stars: number,
        suffix: string | null
    }[]> {
        const myCard = await this.cardModel.find();
        return myCard.map((card) => {
            return {
                name: card.name,
                tags: card.tags,
                stars: card.stars,
                suffix: card.suffix || null
            }
        })
    }

    async softCreate({ name, tags, stars, suffix }): Promise<Record<string, string>> {
        if (!suffix) suffix = null;
        await this.cardModel.create({
            name,
            tags: tags.split('.'),
            stars,
            suffix
        });
        return {
            "Process": "Done"
        }
    }

}
