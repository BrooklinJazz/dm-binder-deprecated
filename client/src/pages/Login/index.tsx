import "./Login.scss";

import combineClasses from "combine-classes";
import React, { useState } from "react";

import { Theme } from "../../common/theme";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import Form from "../../components/Inputs/Form";
import Label from "../../components/Inputs/Label";
import Text from "../../components/Inputs/Text";
import { useLoginAction, useSignUpAction } from "../../context/auth/actions";
import { useAuthDispatch, useAuthState } from "../../context/auth/store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSigningUp, setIsSigningUp] = React.useState(true);

  const dispatch = useAuthDispatch();
  const state = useAuthState();
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
        onSubmit={handleLogin}
        className={combineClasses(Theme.primary, "Login_Form")}
      >
        <h1 className={"Login_Header"}>{isSigningUp ? "Sign Up" : "Log In"}</h1>
        <div className={"Login_Content"}>
          <Label htmlFor="email" className={"Login_Email"} label="Email">
            <Text
              id="email"
              className={"Login_Email"}
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Label>
          <Label
            htmlFor="password"
            className={"Login_Password"}
            label="Password"
          >
            <Text
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Label>
        </div>
        <div className={"Login_Buttons"}>
          <PrimaryButton
            onClick={e => {
              e.preventDefault();
              setIsSigningUp(!isSigningUp);
            }}
            variant="text"
            className="Switch"
          >
            switch to {isSigningUp ? "log in" : "sign up"}
          </PrimaryButton>
          <SecondaryButton className="Submit">
            {isSigningUp ? "Sign Up" : "Log In"}
          </SecondaryButton>
        </div>
      </Form>
    </div>
  );
};

export default Login;
