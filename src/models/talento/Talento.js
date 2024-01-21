import { Schema, models, model } from "mongoose";

const talentoSchema = new Schema({
        nombreTalento: {
            type: String,
            required: [true, 'El nombre del Talento es requerido'],
            trim: true,
        },
        codigoTalento: {
            type: String,
            required: [true, 'El codigo Talento es requerido'],
            trim: true,
        },
        descripcion: {
            type: String,
            trim: true,
        },
        estadoTalento: {
            type: String,
            required: [true, 'El estado del talento es requerido'],
            trim: true,
        }
    })

export default models.Talento || model('Talento', talentoSchema)