import { Schema, models, model } from "mongoose";


const integrantesSchema = new Schema({
    primerNombre: {
        type: String,
        required: [true, 'El primer nombre es requerido'],
        trim: true
    },
    segundoNombre: {
        type: String,
        trim: true
    },
    primerApellido: {
        type: String,
        required: [true, 'El primer Apellido es requerido'],
        trim: true
    },
    segundoApellido: {
        type: String,
        trim: true
    },
    fechaNacimiento: {
        type: String,
        required: [true, 'Fecha de nacimiento es requerido'],
        trim: true
    },
    celular: {
        type: String,
        trim: true
    },
    correoElectronico: {
        type: String,
        trim: true
    },
    genero: {
        type: String,
        required: [true, 'Genero es requerido'],
        trim: true
    },
    direccion: {
        type: String,
        trim: true
    },
    estadoServicio: {
        type: String,
        required: [true, 'Estado de servicio requerido'],
        trim: true
    },
    talentos: [{type: Schema.Types.ObjectId, ref: "Talento"}],
    horarios: [{type: Schema.Types.ObjectId, ref: "Horario"}]
});

export default models.Integrantes || model('Integrantes', integrantesSchema)