export interface IAuthState {
  token?: string;
  isLoading: boolean;
  error?: string;
}

export type AuthAction =
  | IAuthSuccessAction
  | ILogoutAction
  | IAuthStartAction
  | IAuthFailAction;

export type AuthDispatch = (action: AuthAction) => void;

export interface ILogoutAction {
  type: "logout";
}

export interface IAuthStartAction {
  type: "auth_start";
}
export interface IAuthSuccessAction {
  type: "auth_success";
  payload: { token: string };
}
export interface IAuthFailAction {
  type: "auth_fail";
  payload: { error: string };
}

export interface IUserInput {
  email: string;
  password: string;
}
