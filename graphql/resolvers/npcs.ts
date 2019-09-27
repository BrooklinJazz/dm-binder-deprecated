import Npc from '../../models/npcs';
import { IContext, IInput, INpc, INpcInput } from '../../models/types';
import User from '../../models/users';
import { userFromId, checkSignedIn } from './helpers';

export default {
  Query: {
    npcs: async (root: any, input: null, context: IContext) => {
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
    createNpc: async (
      root: any,
      { input }: IInput<INpcInput>,
      context: IContext
    ) => {
      checkSignedIn(context);
      const userId = context.user!._id;
      const npc = new Npc({
        ...input,
        creator: userId
      });
      try {
        const createdNpc = await npc.save();
        const dbUser = await User.findById(userId);
        if (!dbUser) {
          throw new Error('User Does Not Exist');
        }
        dbUser.npcs.push(createdNpc);
        dbUser.save();
        // NOTE for some reason using spread syntax
        // makes name and description keys undefined
        // I've posted a question on S/O: https://stackoverflow.com/questions/58126454/using-spread-syntax-with-mongoose-document-after-calling-the-save-method-result
        return {
          ...createdNpc,
          description: createdNpc.description,
          name: createdNpc.name,
          creator: userFromId(npc.creator)
        };
      } catch (error) {
        throw error;
      }
    }
  }
};
