import "./Login.scss";

import combineClasses from "combine-classes";
import React, { useState } from "react";

import { Theme } from "../../common/theme";
import {
  DefaultButton,
  PrimaryButton,
  SecondaryButton,
  SuccessButton
} from "../../components/Button";
import Form from "../../components/Inputs/Form";
import Label from "../../components/Inputs/Label";
import Text from "../../components/Inputs/Text";
import { useLoginAction, useSignUpAction } from "../../context/auth/actions";
import {
  selectAuthError,
  selectAuthIsLoading
} from "../../context/auth/selectors";
import { useAuthDispatch, useAuthState } from "../../context/auth/store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSigningUp, setIsSigningUp] = React.useState(true);

  const state = useAuthState();
  const isLoading = selectAuthIsLoading(state);
  const error = selectAuthError(state);

  const dispatch = useAuthDispatch();
  const login = useLoginAction(dispatch);
  const signUp = useSignUpAction(dispatch);

  const handleLogin = () => {
    if (isSigningUp) {
      signUp({ email, password });
    } else {
      login({ email, password });
    }
  };
  return (
    <div className={"Login_"}>
      <Form
        isLoading={isLoading}
        onSubmit={handleLogin}
        className={combineClasses(Theme.default, "Login_Form")}
      >
        <h1 className={"Login_Header"}>{isSigningUp ? "Sign Up" : "Log In"}</h1>
        <div className={"Login_Content"}>
          <Label htmlFor="email" label="Email">
            <Text
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Label>
          <Label htmlFor="password" label="Password">
            <Text
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Label>
        </div>
        <div className={"Login_Buttons"}>
          <DefaultButton
            onClick={e => {
              e.preventDefault();
              setIsSigningUp(!isSigningUp);
            }}
            variant="text"
            className="Switch"
          >
            switch to {isSigningUp ? "log in" : "sign up"}
          </DefaultButton>
          <SuccessButton className="Submit">
            {isSigningUp ? "Sign Up" : "Log In"}
          </SuccessButton>
        </div>
      </Form>
    </div>
  );
};

export default Login;
