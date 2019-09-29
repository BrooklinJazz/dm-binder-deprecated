import { login, signUp } from "../../api/auth";
import {
  AuthDispatch,
  IAuthFailAction,
  IAuthStartAction,
  IAuthSuccessAction,
  ILogoutAction,
  IUserInput
} from "./types";

const authRequestStart = (): IAuthStartAction => ({
  type: "auth_start"
});

const authRequestFail = (
  payload: IAuthFailAction["payload"]
): IAuthFailAction => ({
  type: "auth_fail",
  payload
});

const authRequestSuccess = (
  payload: IAuthSuccessAction["payload"]
): IAuthSuccessAction => ({
  type: "auth_success",
  payload
});

export const logoutAction = (): ILogoutAction => ({
  type: "logout"
});

export const useSignUpAction = (dispatch: AuthDispatch) => ({
  email,
  password
}: IUserInput) => {
  dispatch(authRequestStart());
  signUp<{ token: string; tokenExpiration: string; userId: string }>(
    {
      email,
      password
    },
    ["token", "tokenExpiration", "userId"]
  )
    .then(({ token }) => dispatch(authRequestSuccess({ token })))
    .catch(err => dispatch(authRequestFail(err)));
};

export const useLoginAction = (dispatch: AuthDispatch) => ({
  email,
  password
}: IUserInput) => {
  dispatch(authRequestStart());
  login<{ token: string; tokenExpiration: string; userId: string }>(
    {
      email,
      password
    },
    ["token", "tokenExpiration", "userId"]
  )
    .then(({ token }) => dispatch(authRequestSuccess({ token })))
    .catch(err => dispatch(authRequestFail(err)));
};
