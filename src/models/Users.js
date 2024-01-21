import { Schema, model, models } from "mongoose";

const usersSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'El email es requerido'],
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'El password es requerido'],
        trim: true,
    }
})

export default models.Users || model('Users', usersSchema)