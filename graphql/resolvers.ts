import { proyectoModelo } from "../modelos/proyectoModelo";
import { usuarioModelo } from "../modelos/usuarioModelo";

const resolvers = {
  Query: {
    // Marcela: Cuando intentaba hacer yarn start me salía un error diciendo que los parámetros
    // eran de tipo "any" por eso tienen  :any, pero se le puede quitar y dejar (parent, args) si no se genera error

    Usuarios: async (parent: any, args: any) => {
      const usuarios = await usuarioModelo.find();
      return usuarios;
    },

    Usuario: async (parent: any, args: any) => {
      const usuario = await usuarioModelo.findOne({_id: args._id});
      return usuario;
    },

    Proyectos: async (parent: any, args: any) => {
      const proyectos = await proyectoModelo.find().populate('lider');
      return proyectos;
    },

  },

  Mutation: {
    crearUsuario: async (parent: any, args: any) => {
      const usuarioCreado = await usuarioModelo.create({
        correo: args.correo,
        identificacion: args.identificacion,
        nombre: args.nombre,
        apellido: args.apellido,
        rol: args.rol,
      });

      if (Object.keys(args).includes('estado')){
        usuarioCreado.estado = args.estado;
      }

      return usuarioCreado;
    },
    
    editarUsuario: async(parent: any, args: any) => {
      const usuarioEditado = await usuarioModelo.findByIdAndUpdate( args._id,{
        correo: args.correo,
        identificacion: args.identificacion,
        nombre: args.nombre,
        apellido: args.apellido,
        rol: args.rol,
        estado: args.estado,
      });
      return usuarioEditado;
    },

    eliminarUsuario: async(parent: any, args: any) => {
      
      if (Object.keys(args).includes('_id')){
        const usuarioEliminado = await usuarioModelo.findOneAndDelete({ _id:args._id });
        return usuarioEliminado;
      }else if(Object.keys(args).includes('correo')){
        const usuarioEliminado = await usuarioModelo.findOneAndDelete({correo:args.correo });
        return usuarioEliminado;
      }
    },
  
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

export { resolvers };
