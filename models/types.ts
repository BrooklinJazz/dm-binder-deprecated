import { Document } from 'mongoose';

export interface IInput<T> {
  input: T;
}

export interface IUserInput {
  email: string;
  password: string;
}

export interface IAuthData {
  userId: string;
  token: string;
  tokenExpiration: number;
}

export interface IUser extends Document, IUserInput {
  npcs: Array<INpc['_id']>;
}

export interface INpcInput {
  name: string;
  description: string;
  creator: IUser;
}

export interface INpc extends Document, INpcInput {
  creator: IUser['_id'];
}

export interface IContext {
  user?: IUser;
}
