import { resolversProyecto } from "../modelos/proyecto/resolversProyecto.js";
import { resolversUsuario } from "../modelos/usuario/resolversUsuario.js";
import { resolversAvance } from "../modelos/avance/resolversAvance.js";
import { resolversAutenticacion } from "./auth/resolversAuth.js";

export const resolvers = [resolversUsuario, resolversProyecto, resolversAvance, resolversAutenticacion];