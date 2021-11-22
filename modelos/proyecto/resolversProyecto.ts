import { proyectoModelo } from "./proyectoModelo";

const resolversProyecto = {
  Query: {
    // Marcela: Cuando intentaba hacer yarn start me salía un error diciendo que los parámetros
    // eran de tipo "any" por eso tienen  :any, pero se le puede quitar y dejar (parent, args) si no se genera error

    Proyectos: async (parent: any, args: any) => {
      const proyectos = await proyectoModelo.find().populate('lider');
      return proyectos;
    },

  },

  Mutation: {
  
    crearProyecto: async (parent: any, args: any) => {
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
