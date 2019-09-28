import { login } from "../../api/auth";
import { useAuthDispatch } from "./store";
import { ILoginAction, ILogoutAction, AuthDispatch } from "./types";

const loginRequestSuccess = (
  payload: ILoginAction["payload"]
): ILoginAction => ({
  type: "login",
  payload
});

const logoutAction = (): ILogoutAction => ({
  type: "logout"
});

const useLoginAction = (dispatch: AuthDispatch) => ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  login<{ token: string; tokenExpiration: string; userId: string }>(
    {
      email,
      password
    },
    ["token", "tokenExpiration", "userId"]
  )
    .then(({ token }) => dispatch(loginRequestSuccess({ token })))
    .catch(err => console.log(err));
};

export { useLoginAction };
