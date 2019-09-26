import Npc from '../../models/npcs';
import { INpc, INpcInput } from '../../models/types';
import User from '../../models/users';
import { userFromId } from './merge';

export default {
  Query: {
    npcs: async () => {
      try {
        const npcs = await Npc.find().lean();
        const transformedNpcs = npcs.map((npc: INpc) => ({
          ...npc,
          creator: userFromId(npc.creator)
        }));
        return transformedNpcs;
      } catch (error) {
        throw error;
      }
    }
  },
  Mutation: {
    // TODO determine req type
    createNpc: async ({ input }: { input: INpcInput }, req: any) => {
      // TODO add auth again.
      // if (!req.isAuth) {
      //   throw new Error('User is not authenticated');
      // }
      const npc = new Npc({
        ...input,
        creator: req.userId
      });
      try {
        const createdNpc = await npc.save();
        const dbUser = await User.findById(req.userId);
        if (!dbUser) {
          throw new Error('User Does Not Exist');
        }
        dbUser.npcs.push(createdNpc);
        dbUser.save();
        return { ...createdNpc };
      } catch (error) {
        throw error;
      }
    }
  }
};
