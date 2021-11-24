import mongoose from "mongoose";
import { usuarioModelo } from "../usuario/usuarioModelo.js";

const { Schema, model } = mongoose;

const proyectoSchema = new Schema({
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
    enum: ['ACTIVO', 'INACTIVO'],
    default: 'INACTIVO',
  },
  fase: {
    type: String,
    enum: ['INICIADO', 'DESARROLLO', 'TERMINADO', 'NULO'],
    default: 'NULO',
  },
  lider: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: usuarioModelo,
  },
  objetivos: [
      {
        descripcion: {
          type: String,
          required: true,
        },
        tipo: {
          type: String,
          required: true,
          enum: ['GENERAL', 'ESPECIFICO'],
        },
      },
    ],
  },

  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }

);


proyectoSchema.virtual("avances",{
  ref: 'Avance',
  localField: '_id',
  foreignField: 'proyecto',
});

proyectoSchema.virtual("inscripciones",{
  ref: 'Inscripcion',
  localField: '_id',
  foreignField: 'proyecto',
});


const proyectoModelo = model("Proyecto", proyectoSchema, "Proyectos");

export { proyectoModelo };
