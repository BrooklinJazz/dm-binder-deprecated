import { gql } from 'apollo-server';

export default gql`
    type Npc {
        name: String!
        description: String
    }

    input NpcInput {
        name: String!
        description: String
    }

    extend type Query {
        npcs: [Npc!]!
    }

    extend type Mutation {
        createNpc(input: NpcInput): Npc!
    }
`;
