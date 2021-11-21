import { Schema, model } from "mongoose";
import { avance } from "../interfaces/avance";
import { usuarioModelo } from "../modelos/usuarioModelo";
import { proyectoModelo } from "../modelos/proyectoModelo";
const avanceSchema = new Schema<avance>({
  descripcion: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  observaciones: [{ type: String }],
  creadoPor: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: usuarioModelo,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: proyectoModelo,
  },
});

const avanceModelo = model("avance", avanceSchema, "avances");

export { avanceModelo };
