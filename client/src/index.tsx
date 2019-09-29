import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import { Routes } from "./common/routes";
import AuthRoute from "./components/AuthRoute";
import { selectAuthToken, selectIsLoggedIn } from "./context/auth/selectors";
import { AuthProvider, useAuthState } from "./context/auth/store";
import Login from "./pages/Login";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "./ThemeProvider";

const PageRouting = () => {
  const state = useAuthState();
  const isLoggedIn = selectIsLoggedIn(state);
  console.log(isLoggedIn, state);
  return (
    <Switch>
      <AuthRoute
        isAuth={!isLoggedIn}
        redirectUrl={Routes.APP}
        path={Routes.LOGIN}
        component={Login}
      />
      <AuthRoute isAuth={isLoggedIn} path={Routes.APP} component={App} />
    </Switch>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <PageRouting />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
