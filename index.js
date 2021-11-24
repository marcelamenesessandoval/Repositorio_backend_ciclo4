import express from 'express';
import cors from 'cors';
import apolloServer from 'apollo-server-express';
import dotenv from 'dotenv';
import { conectarDB } from './db/db.js';
import { tipos } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';


const { ApolloServer } = apolloServer;

dotenv.config();

const server = new ApolloServer ({
  typeDefs: tipos,
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


