import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { conectarDB } from './db/db';
import { typeDefs} from './graphql/types';
import { resolvers } from './graphql/resolvers';


dotenv.config();

const server = new ApolloServer ({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const app = express ();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async()=>{
  await conectarDB();
  await server.start();

  server.applyMiddleware({ app });

  console.log('Servidor listo');

});







// import { conectarDB } from "./db/db";
// import { enumRol, enumTipoObjetivo } from "./modelos/enums";
// import { proyectoModelo } from "./modelos/proyectoModelo";
// import { usuarioModelo } from "./modelos/usuarioModelo";
// import { avanceModelo } from "./modelos/avanceModelo";
// import { inscripcion } from "./interfaces/inscripcion";
// import { inscripcionModelo } from "./modelos/inscripcionModelo";

// const main = async () => {
//   await conectarDB();
// };

// main();
