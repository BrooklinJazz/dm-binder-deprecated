import React, { createContext, ReactNode, useContext, useReducer } from "react";

import { AuthAction, AuthDispatch, IAuthState } from "./types";

const authReducer = (state: IAuthState, action: AuthAction) => {
  switch (action.type) {
    case "login":
      return { ...state, token: action.payload.token };
    case "logout":
      return { ...state, token: undefined };
    default:
      throw new Error(`unhandled action type ${action!.type}`);
  }
};

const AuthStateContext = createContext<IAuthState | undefined>(undefined);

const AuthDispatchContext = createContext<AuthDispatch | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, { token: undefined });
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within an AuthProvider");
  }
  return context;
};

const useAuthDispatch = () => {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuthState, useAuthDispatch };
