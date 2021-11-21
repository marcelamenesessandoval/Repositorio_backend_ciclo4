import { Schema } from "mongoose";

interface avance {
  proyecto: Schema.Types.ObjectId;
  fecha: Date;
  descripcion: string;
  observaciones: [string];
  creadoPor: Schema.Types.ObjectId;
}

export { avance };
