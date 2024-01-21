import { Schema, model, models } from "mongoose";

const taskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido'],
        trim: true,
    },
    phone: {
        type: String,
        required: [true, 'El nombre es requerido'],
        trim: true,
    }
}, {
    timestamps: true
})

export default models.Integrantes || model('Integrantes', taskSchema)