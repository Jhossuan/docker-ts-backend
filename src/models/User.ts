import { model, Schema } from "mongoose";
import { Country } from "../types";

export interface UserInterface {
    user: string
    name: string
    lastName: string
    nickname: string
    email: string
    password: string
    country: Country
    identity_verified: string
}

const UserSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: Country,
        required: true
    },
    identity_verified: {
        type: String,
        required: true
    },

})

const User = model<UserInterface>('User', UserSchema)
export default User