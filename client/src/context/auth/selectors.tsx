import jwt from "jsonwebtoken";
import { createSelector } from "reselect";

import { IToken } from "../../common/types";
import { IAuthState } from "./types";

export const selectAuthToken = (state: IAuthState) => state.token;
export const selectAuthIsLoading = (state: IAuthState) => state.isLoading;
export const selectAuthError = (state: IAuthState) => state.error;

export const selectIsLoggedIn = createSelector(
  selectAuthToken,
  token => {
    if (token) {
      const decodedToken = jwt.decode(token);
      return Boolean((decodedToken as IToken).exp > 0);
    }
    return false;
  }
);
