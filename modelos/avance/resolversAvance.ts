import { avanceModelo } from "./avanceModelo";

const resolversAvance = {
  Query: {
    Avances: async (parent: any, args: any) => {
      const avances = await avanceModelo.find().populate('proyecto').populate('creadoPor');
      return avances;
    },
  },

  Mutation: {
    crearAvance: async (parent: any, args: any) => {
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
