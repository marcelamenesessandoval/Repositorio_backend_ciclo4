import { Schema, model } from "mongoose";
import { enumEstadoInscripcion } from "./enums";
import { inscripcion } from "../interfaces/inscripcion";
import { proyectoModelo } from "./proyectoModelo";
import { usuarioModelo } from "./usuarioModelo";

const inscripcionSchema = new Schema<inscripcion>({
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
    enum: enumEstadoInscripcion,
  },
  fechaIngreso: {
    type: Date,
  },
  fechaEgreso: {
    type: Date,
  },
});

const inscripcionModelo = model(
  "inscripcion",
  inscripcionSchema,
  "inscripciones"
);

export { inscripcionModelo };
