// import { gql } from "apollo-server-express";

import gql from "graphql-tag";


const tiposProyecto = gql`

  type Objetivo{
    _id: ID!
    descripcion: String!
    tipo: enumTipoObjetivo!
  }

  input crearObjetivo{
    descripcion: String!
    tipo: enumTipoObjetivo!
  }

  type Proyecto{
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: enumEstadoProyecto!
    fase: enumFase!
    lider: Usuario!
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
  }

  type Query {
    Proyectos:[Proyecto]

  }

  type Mutation {

    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: enumEstadoProyecto!
      fase: enumFase!
      lider: String!
      objetivos: [crearObjetivo]
      ):Proyecto

  }
`;

export { tiposProyecto };
