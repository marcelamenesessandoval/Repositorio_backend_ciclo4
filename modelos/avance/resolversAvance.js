import { avanceModelo } from "./avanceModelo.js";

const resolversAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await avanceModelo
        .find()
        .populate("proyecto")
        .populate("creadoPor");
      return avances;
    },

    filtrarAvance: async (parent, args) => {
      const avanceFiltrado = await avanceModelo
        .find({ proyecto: args.idProyecto })
        .populate("proyecto")
        .populate("creadoPor");
      return avanceFiltrado;
    },
  },

  Mutation: {
    crearAvance: async (parent, args) => {
      const avanceCreado = await avanceModelo.create({
        descripcion: args.descripcion,
        fecha: new Date(args.fecha),
        creadoPor: args.creadoPor,
        proyecto: args.proyecto,
      });
      return avanceCreado;
    },
  },
};


export { resolversAvance };
