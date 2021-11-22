import { gql } from "apollo-server-express";

const tiposAvance = gql`

type Avance {
    _id: ID!
    descripcion: String!
    fecha: Date!
    observaciones: [String]
    creadoPor: Usuario!
    proyecto: Proyecto!
}

type Query{
    Avances: [Avance]
}

type Mutation{
    crearAvance(    
        descripcion: String!
        fecha: Date!
        creadoPor: String!
        proyecto: String!
    ):Avance
}

`;

export { tiposAvance };

