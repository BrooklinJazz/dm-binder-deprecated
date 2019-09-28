export interface IAuthInput {
  email: string;
  password: string;
}

export interface ISignUpRetval {
  _id: string;
  email: string;
}

export interface ILoginRetval {
  userId: string;
  token: string;
  tokenExpiration: string;
}

export interface INPCInput {
  name: string;
  description?: string;
}

export interface INPC extends INPCInput {
  _id: string;
}
