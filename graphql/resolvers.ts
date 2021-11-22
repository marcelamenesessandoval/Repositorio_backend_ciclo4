import { resolversProyecto } from "../modelos/proyecto/resolversProyecto";
import { resolversUsuario } from "../modelos/usuario/resolversUsuario";
import { resolversAvance } from "../modelos/avance/resolversAvance";


export const resolvers = [resolversUsuario, resolversProyecto, resolversAvance];