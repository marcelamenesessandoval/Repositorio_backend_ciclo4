import { enumRol, enumEstadoUsuario } from "../modelos/enums";

interface usuario {
  
  correo: string;
  identificacion: string;
  nombre: string;
  apellido: string;
  rol: enumRol;
  estado: enumEstadoUsuario;
}

export { usuario };
