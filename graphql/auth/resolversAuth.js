import { usuarioModelo } from "../../modelos/usuario/usuarioModelo.js";
import bcrypt from 'bcrypt';
import { generateToken } from "../../utils/tokenUtils.js";


const resolversAutenticacion = {
    Mutation: {
        registro: async (parent, args) => {
            
            
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);

            const usuarioCreado = await usuarioModelo.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                password: hashedPassword,
              });
            
              if (Object.keys(args).includes('estado')){
                usuarioCreado.estado = args.estado;
              }
        
            console.log ("Usuario creado", usuarioCreado);
            return {
              token: generateToken({
                _id: usuarioCreado._id,
                nombre: usuarioCreado.nombre,
                apellido: usuarioCreado.apellido,
                identificacion: usuarioCreado.identificacion,
                correo: usuarioCreado.correo,
                rol: usuarioCreado.rol,
              }),
            };
        },
    },
};

export { resolversAutenticacion };