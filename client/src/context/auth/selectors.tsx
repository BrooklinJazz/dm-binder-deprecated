import { IAuthState } from "./types";

export const selectToken = (state: IAuthState) => state.token;
