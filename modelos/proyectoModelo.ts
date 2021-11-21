import { Schema, model } from "mongoose";
import { proyecto } from "../interfaces/proyecto";
import { enumEstadoProyecto, enumFase, enumTipoObjetivo } from "./enums";
import { usuarioModelo } from "./usuarioModelo";

const proyectoSchema = new Schema<proyecto>({
  nombre: {
    type: String,
    unique: true,
    required: true,
  },
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    enum: enumEstadoProyecto,
    default: enumEstadoProyecto.INACTIVO,
  },
  fase: {
    type: String,
    enum: enumFase,
    default: enumFase.NULO,
  },
  lider: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: usuarioModelo,
  },
  objetivos: {
    type: [
      {
        descripcion: {
          type: String,
          required: true,
        },
        tipo: {
          type: String,
          required: true,
          enum: enumTipoObjetivo,
        },
      },
    ],
    required: true,
  },
});

const proyectoModelo = model("proyecto", proyectoSchema, "proyectos");

export { proyectoModelo };
