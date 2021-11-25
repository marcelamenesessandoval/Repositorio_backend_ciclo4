import { usuarioModelo } from "./usuarioModelo.js";

const resolversUsuario = {
  Query: {

    Usuarios: async (parent, args) => {
      const usuarios = await usuarioModelo.find();
      return usuarios;
    },

    Usuario: async (parent, args) => {
      const usuario = await usuarioModelo.findOne({_id: args._id});
      return usuario;
    },


  },

  Mutation: {
    crearUsuario: async (parent, args) => {
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
    
    editarUsuario: async(parent, args) => {
      const usuarioEditado = await usuarioModelo.findByIdAndUpdate( args._id,{
        correo: args.correo,
        identificacion: args.identificacion,
        nombre: args.nombre,
        apellido: args.apellido,
        rol: args.rol,
        estado: args.estado,
      }, {new: true});
      return usuarioEditado;
    },

    eliminarUsuario: async(parent, args) => {
      
      if (Object.keys(args).includes('_id')){
        const usuarioEliminado = await usuarioModelo.findOneAndDelete({ _id:args._id });
        return usuarioEliminado;
      }else if(Object.keys(args).includes('correo')){
        const usuarioEliminado = await usuarioModelo.findOneAndDelete({correo:args.correo });
        return usuarioEliminado;
      }
    },
  
  
  },
};

export { resolversUsuario };
