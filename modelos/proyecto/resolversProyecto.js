import { proyectoModelo } from "./proyectoModelo.js";

const resolversProyecto = {
  Query: {

    Proyectos: async (parent, args) => {
      const proyectos = await proyectoModelo.find().populate('avances').populate('inscripciones');
      return proyectos;
    },

  },

  Mutation: {
  
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await proyectoModelo.create({
        nombre: args.nombre,
        presupuesto: args.presupuesto,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        estado: args.estado,
        fase: args.fase,
        lider: args.lider,
        objetivos: args.objetivos, 
      });
      return proyectoCreado;
    },

  
  },
};

export { resolversProyecto };
