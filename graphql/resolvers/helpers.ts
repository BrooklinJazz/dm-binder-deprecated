import Npc from '../../models/npcs';
import { INpc, IUser, IContext } from '../../models/types';
import User from '../../models/users';

export const npcsFromIds = (npcIds: string[]): any =>
  Npc.find({ _id: { $in: npcIds } })
    .lean()
    .then((npcs: INpc[]) =>
      npcs.map(npc => ({ ...npc, creator: userFromId(npc.creator) }))
    );

export const userFromId = (userId: string) =>
  User.findById(userId)
    .lean()
    .then((user: IUser) => user && { ...user, NPCs: npcsFromIds(user.npcs) })
    .catch(err => {
      throw err;
    });

export const checkSignedIn = (context: IContext) => {
  if (!context.user) {
    throw new Error('User is not authenticated');
  }
}