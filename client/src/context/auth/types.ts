export interface IAuthState {
  token?: string;
}

export type AuthAction = ILoginAction | ILogoutAction;

export type AuthDispatch = (action: ILoginAction) => void;

export interface ILogoutAction {
  type: "logout";
}

export interface ILoginAction {
  type: "login";
  payload: { token: string };
}
