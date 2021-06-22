import { post, pre, prop } from "@typegoose/typegoose";
import { hashSync } from 'bcrypt';

@pre<User>('save', async function () {
    this.password = hashSync(this.password, 10);
})

export class User {
    @prop({ unique: true })
    username: string;

    @prop()
    password: string;

    @prop()
    createdAt?: Date;

    @prop()
    updatedAt?: Date;
}