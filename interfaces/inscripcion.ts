import { Schema } from "mongoose";
import { enumEstadoInscripcion } from "../modelos/enums/enums";
interface inscripcion {
  proyecto: Schema.Types.ObjectId;
  estudiante: Schema.Types.ObjectId;
  estado: enumEstadoInscripcion;
  fechaIngreso: Date;
  fechaEgreso: Date;
}

export { inscripcion };
