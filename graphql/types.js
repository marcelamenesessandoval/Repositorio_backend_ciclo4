// import { gql } from "apollo-server-express";

import gql from "graphql-tag";
import { tiposUsuario } from "../modelos/usuario/typesUsuario.js";
import { tiposProyecto} from "../modelos/proyecto/typesProyecto.js";
import { tiposAvance } from "../modelos/avance/typesAvance.js";
import { tiposInscripcion } from "../modelos/inscripcion/typesInscripcion.js";
import { tiposEnums } from "../modelos/enums/typesEnums.js";
import { tiposAutenticacion } from "./auth/typesAuth.js";


const tiposGlobales = gql`

  scalar Date

`;

export const tipos = [tiposGlobales, tiposUsuario, tiposProyecto, tiposAvance, tiposInscripcion, tiposEnums, tiposAutenticacion];
