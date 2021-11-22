import { gql } from "apollo-server-express";

const tiposEnums = gql`

  enum enumRol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }

  enum enumEstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum enumEstadoProyecto {
    ACTIVO
    INACTIVO
  }

  enum enumFase {
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
  }


  enum enumTipoObjetivo {
    GENERAL 
    ESPECIFICO 
  }

  
`;

export { tiposEnums };
