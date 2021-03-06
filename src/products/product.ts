import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";
import { Supply } from "../supplies/supply";

export class Product {
    @prop()
    code: string;

    @prop()
    name: string;

    @prop()
    supplies: { code: string, name: string }[];

    @prop()
    qty?: number;

    @prop()
    createdAt?: Date;

    @prop()
    updatedAt?: Date;
}