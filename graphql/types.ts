import { gql } from "apollo-server-express";
import { tiposEnums } from "../modelos/enums/typesEnums";
import { tiposUsuario } from "../modelos/usuario/typesUsuario";
import { tiposProyecto} from "../modelos/proyecto/typesProyecto";
import { tiposAvance } from "../modelos/avance/typesAvance";

const tiposGlobales = gql`

  scalar Date

`;

export const tipos = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto, tiposAvance];
