import { ApolloServer, gql } from 'apollo-server';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import typeDefs from './graphql/typeDefs';
import User from './models/users';

const npcs = [{ name: 'Example NPC' }];

const resolvers = {
  Query: {
    npcs: () => npcs
  },

};

const server = new ApolloServer({ typeDefs, resolvers });

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-o0hne.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    server.listen().then(({ url }: { url: string }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
