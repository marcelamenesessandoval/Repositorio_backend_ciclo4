import { Schema } from "mongoose";
import {
  enumEstadoProyecto,
  enumFase,
  enumTipoObjetivo,
} from "../modelos/enums/enums";

interface proyecto {
  nombre: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFin: Date;
  lider: Schema.Types.ObjectId;
  estado: enumEstadoProyecto;
  fase: enumFase;
  objetivos: [
    {
      descripcion: String;
      tipo: enumTipoObjetivo;
    }
  ];
}

export { proyecto };
