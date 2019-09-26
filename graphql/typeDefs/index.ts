import { gql } from 'apollo-server';
import npc from './npcs';
import user from './users';

// these types are extended in the other typeDefs files
const root = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export default [root, npc, user];
