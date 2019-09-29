import jwt from "jsonwebtoken";

import Npc from "../../models/npcs";
import { IContext, INpc, IUser } from "../../models/types";
import User from "../../models/users";

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
    throw new Error("User is not authenticated");
  }
};

export const authTokenFromUser = (user: IUser) =>
  jwt.sign(
    { userId: user.id, email: user.email },
    // NOTE using an empty string when undefined to avoid a type issue.
    process.env.JWT_SECRET_KEY || "",
    { expiresIn: "1h" }
  );
