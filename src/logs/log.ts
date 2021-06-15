import { prop } from "@typegoose/typegoose";

export class Log {
    @prop()
    message: string;

    @prop()
    date: string;

    // TODO adc type to target
    @prop()
    target: any;

    @prop()
    description: string;

    @prop()
    createdAt?: Date;

    @prop()
    updatedAt?: Date;
}