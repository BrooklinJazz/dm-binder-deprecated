import { Document } from 'mongoose';

export interface IInput<T> {
  input: T;
}

export interface IUserInput {
  email: string;
  password: string;
}

export interface IUser extends Document, IUserInput {
  npcs: Array<INpc['_id']>;
}

export interface INpcInput {
  name: string;
  description: string;
}

export interface INpc extends Document, INpcInput {
  creator: IUser['_id'];
}
