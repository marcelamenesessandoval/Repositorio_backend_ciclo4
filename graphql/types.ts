import { gql } from "apollo-server-express";

const typeDefs = gql`

  scalar Date

  
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

  type Usuario {
    _id: ID!
    correo: String!
    identificacion: String!
    nombre: String!
    apellido: String!
    rol: enumRol!
    estado: enumEstadoUsuario
  }

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
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id:String): Usuario
    Proyectos:[Proyecto]

  }

  type Mutation {
    crearUsuario(
      correo: String!
      identificacion: String!
      nombre: String!
      apellido: String!
      rol: enumRol!
      estado: enumEstadoUsuario
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

export { typeDefs };
