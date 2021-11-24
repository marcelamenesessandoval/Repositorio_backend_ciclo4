import mongoose from "mongoose";
import { proyectoModelo } from "../proyecto/proyectoModelo.js";
import { usuarioModelo } from "../usuario/usuarioModelo.js";

const { Schema, model } = mongoose;

const inscripcionSchema = new Schema({
  proyecto: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: proyectoModelo,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: usuarioModelo,
  },
  estado: {
    type: String,
    enum: ['ACEPTADA', 'RECHAZADA', 'PENDIENTE'],
    default: 'PENDIENTE',
  },
  fechaIngreso: {
    type: Date,
    required: false,
  },
  fechaEgreso: {
    type: Date,
    required: false,
  },
});

const inscripcionModelo = model(
  "Inscripcion",
  inscripcionSchema,
  "Inscripciones"
);

export { inscripcionModelo };
