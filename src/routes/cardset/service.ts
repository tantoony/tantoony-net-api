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
            "status": "success"
        }
    }

    getItems(query): CardDoc[] {
        let resp: CardDoc[] = [];
        Object.keys(query).map((key) => {
            this.cardModel.find({ [key]: query[key] }, (error, cards) => {
                if (error) {
                    console.log(error);
                    return {
                        status: "Failed",
                        message: error.message,
                        error: error.name
                    }
                } else resp = cards;
            });
        });
        return resp;
    }

    delItem(query): CardDoc | Record<string, string> {
        if (!query["id"]) return {
            "status": "failiture"
        }
        let model: CardDoc;
        this.cardModel.findOne({ _id: query["id"] }, {}, {}, (error, card) => {
            if (error) {
                console.log(error);
                return {
                    status: "Failed",
                    message: error.message,
                    error: error.name
                }
            } else return card;
        }).exec().then(async (card) => {
            if (query.toArray().length == 1) {
                await card.delete()
                return card;
            } else if (query["type"]) {
                switch (query["type"]) {
                    case "tag":
                        await card.update({ $pull: { tags: query["type"]["tags"] } });
                        break;
                    default:
                        break;
                }
            }

        });
    }


}
