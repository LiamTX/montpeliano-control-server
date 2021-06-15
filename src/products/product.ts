import { prop } from "@typegoose/typegoose";
import { Supply } from "../supplies/supply";

export class Product {
    @prop()
    code: string;

    @prop()
    name: string;

    @prop()
    supplies: Supply[];

    @prop()
    qty?: number;

    @prop()
    createdAt?: Date;

    @prop()
    updatedAt?: Date;
}