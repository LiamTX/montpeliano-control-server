import { prop } from "@typegoose/typegoose";
import { format } from "date-fns";

export const PROCESS_MESSAGES = {
    SUPPLY_ENTRY: 'SUPPLY_ENTRY',
    SUPPLY_OUTPUT: 'SUPPLY_OUTPUT'
}

export class Log {
    @prop()
    message: string;

    @prop({ default: new Date() })
    date?: string;

    // TODO adc type to target
    @prop()
    targetCode: string;

    @prop()
    targetName: string;

    @prop()
    description?: string;

    @prop()
    value?: string;

    @prop()
    createdAt?: Date;

    @prop()
    updatedAt?: Date;
}