// import { gql } from "apollo-server-express";

import gql from "graphql-tag";

const tiposAutenticacion = gql`

type Token {
    token: String
    error: String
}

type Mutation {
    registro(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: enumRol!
      password: String!
    ): Token!
  }
`;

export { tiposAutenticacion };
