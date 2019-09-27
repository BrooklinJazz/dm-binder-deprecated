import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import { Routes } from "./common/routes";
import Login from "./pages/Login";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "./ThemeProvider";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <ThemeProvider>
        <Route path={Routes.LOGIN} component={Login} />
        <Route path={Routes.APP} component={App} />
      </ThemeProvider>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
