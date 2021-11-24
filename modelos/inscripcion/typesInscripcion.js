// import { gql } from "apollo-server-express";

import gql from "graphql-tag";

const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estado: enumEstadoInscripcion!
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: Proyecto!
    estudiante: Usuario!
  }

  type Queryn {
    Inscripciones: [Inscripcion]
  }

  type Mutation {
    crearInscripcion(
      estado: enumEstadoInscripcion!
      proyecto: String!
      estudiante: String!
    ): Inscripcion

    aprobarInscripcion(
      id: String!): Inscripcion

  }
`;

export { tiposInscripcion };
