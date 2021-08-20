import { prop } from "@typegoose/typegoose";
import { IsNotEmpty, IsNumber } from "class-validator";

export class Supply {
    @IsNotEmpty()
    @prop({ unique: true })
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

    @IsNotEmpty()
    @prop()
    value: number;

    @prop({ default: 0 })
    qty?: number;

    @prop()
    valueQty?: number;

    @prop()
    createdAt?: Date;

    @prop()
    updatedAt?: Date;
}