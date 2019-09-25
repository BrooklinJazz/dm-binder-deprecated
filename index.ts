const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Npc {
    name: String
  }

  type Query {
    npcs: [Npc!]!
  }

  type User {
    _id: ID,
    email: String!
    password: String
  }

  input UserInput {
    _id: ID,
    email: String!
    password: String
  }

  type Mutation {
    addUser(input: UserInput): User!
  }
`;

const npcs = [{ name: "Example NPC" }];

const resolvers = {
  Query: {
    npcs: () => npcs
  },
  Mutation: {
    addUser: (root: any, args: any) => {
      return args;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
