export interface IAuthInput {
  email: string;
  password: string;
}

export interface ISignUpRetval {
  _id: string;
  email: string;
}

export interface IToken {
  userId: string;
  email: string;
  exp: number;
  iat: number;
}

export interface INPCInput {
  name: string;
  description?: string;
}

export interface INPC extends INPCInput {
  _id: string;
}
