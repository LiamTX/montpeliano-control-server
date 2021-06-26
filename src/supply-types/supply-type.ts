import { prop } from "@typegoose/typegoose";

export class SupplyType {
    @prop()
    code: string;

    @prop()
    name: string;

    @prop()
    createdAt?: Date;

    @prop()
    updatedAt?: Date;
}