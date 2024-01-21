import { Schema, model, models } from "mongoose";

const horarioSchema = new Schema({
    dia: {
        type: String,
        required: [true, 'El nombre del dia es requerido'],
        trim: true,
    },
    codigoDia: {
        type: String,
        required: [true, 'El codigo del dia requerido'],
        trim: true,
    },
    estado: {
        type: String,
        required: [true, 'El estado del dia es requerido'],
        trim: true,
    }
})

export default models.Horario || model('Horario', horarioSchema)