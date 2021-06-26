import { prop } from "@typegoose/typegoose";
import { format } from "date-fns";

export const PROCESS_MESSAGES = {
    SUPPLY_ENTRY: (supply: { name: string, qty: number, measureType: string }) => {
        return ``
    },
    SUPPLY_OUTPUT: (supply: { name: string, qty: number, measureType: string }) => {
        return ``
    }
}

export class Log {
    @prop()
    message: string;

    @prop({ default: format(new Date(), 'dd/MM/yyyy kk:mm') })
    date?: string;

    // TODO adc type to target
    @prop()
    targetCode: string;

    @prop()
    targetName: string;

    @prop()
    description: string;

    @prop()
    value?: string;

    @prop()
    createdAt?: Date;

    @prop()
    updatedAt?: Date;
}