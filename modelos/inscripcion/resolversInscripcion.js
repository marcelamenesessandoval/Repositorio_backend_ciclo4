import { inscripcionModelo } from "./inscripcionModelo";

const resolversInscripcion = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await inscripcionModelo.find();
      return inscripciones;
    },
  },

  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await inscripcionModelo.create({
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcionCreada;
    },

    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await inscripcionModelo.findByIdAndUpdate(args.id,{
        estado: "ACEPTADA",
        fechaIngreso: Date.now(),
      });
      return inscripcionAprobada;

    }



  },
};


export { resolversInscripcion}; 
