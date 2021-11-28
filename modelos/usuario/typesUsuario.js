// import { gql } from "apollo-server-express";

import gql from "graphql-tag";


const tiposUsuario = gql`

  type Usuario {
    _id: ID!
    correo: String!
    identificacion: String!
    nombre: String!
    apellido: String!
    rol: enumRol!

  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id:String): Usuario
  }


  type Mutation {
    crearUsuario(
      correo: String!
      identificacion: String!
      nombre: String!
      apellido: String!
      estado: enumEstadoUsuario!
      password: String!
    ): Usuario

    editarUsuario(
      _id: String!
      correo: String!
      identificacion: String!
      nombre: String!
      apellido: String!
      rol: enumRol!
      estado: enumEstadoUsuario
    ): Usuario


    eliminarUsuario(
      _id:String,
      correo: String
    ): Usuario


  }
`;

export { tiposUsuario };
