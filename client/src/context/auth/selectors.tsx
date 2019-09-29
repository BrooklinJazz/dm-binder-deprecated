import { IAuthState } from "./types";

export const selectAuthToken = (state: IAuthState) => state.token;
export const selectAuthIsLoading = (state: IAuthState) => state.isLoading;
export const selectAuthError = (state: IAuthState) => state.error;
