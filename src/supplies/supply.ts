import { prop } from "@typegoose/typegoose";
import { IsNotEmpty } from "class-validator";

export class Supply {
    @IsNotEmpty()
    @prop()
    code: string;

    @IsNotEmpty()
    @prop()
    name: string;

    @IsNotEmpty()
    @prop()
    type: string;

    @IsNotEmpty()
    @prop()
    measureType: string;

    @prop()
    qty?: number;

    @prop()
    createdAt?: Date;

    @prop()
    updatedAt?: Date;
}