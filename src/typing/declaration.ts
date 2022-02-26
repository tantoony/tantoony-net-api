import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class Project {
    name: string;
    owner: string;
    submitted: Date;
    accepted: Date;
    timeGiven: number;
    finished: Date;
    cost: number;
    stacks: Record<string, string>[];
    feedbacks: {
        points: number;
        content: string;
        from: string
    }[]
}

export type CardDoc = Card & Document;
@Schema()
export class Card {
    @Prop()
    name: string;
    @Prop()
    stars: number;
    @Prop()
    projects: Project[];
    @Prop()
    tags: string[];
}
export const CardSchema = SchemaFactory.createForClass(Card);
