import mongoose from "mongoose";
import { usuarioModelo } from "../usuario/usuarioModelo.js";
import { proyectoModelo } from "../proyecto/proyectoModelo.js";


const { Schema, model } = mongoose;

const avanceSchema = new Schema({
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

const avanceModelo = model("Avance", avanceSchema, "Avances");

export { avanceModelo };
