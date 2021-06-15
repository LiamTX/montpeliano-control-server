import { prop } from "@typegoose/typegoose";

export class Supply {
    @prop()
    code: string;

    @prop()
    name: string;

    @prop()
    type: string;

    @prop()
    measureType: string;

    @prop()
    qty: number;

    @prop()
    createdAt?: Date;

    @prop()
    updatedAt?: Date;
}