// import { gql } from "apollo-server-express";

import gql from "graphql-tag";


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


  enum enumEstadoInscripcion{
      ACEPTADA
      RECHAZADA
      PENDIENTE
  }
  
`;

export { tiposEnums };
