import "./Login.scss";

import combineClasses from "combine-classes";
import React, { useState } from "react";

import { Theme } from "../../common/theme";
import {
  DefaultButton,
  SecondaryButton,
  PrimaryButton
} from "../../components/Button";
import Form from "../../components/Inputs/Form";
import Label from "../../components/Inputs/Label";
import Text from "../../components/Inputs/Text";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={"Login_"}>
      <Form className={combineClasses(Theme.primary, "Login_Form")}>
        <h1 className={"Login_Header"}>Login</h1>
        <div className={"Login_Content"}>
          <Label for="email" className={"Login_Email"} label="Email">
            <Text
              id="email"
              className={"Login_Email"}
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Label>
          <Label for="password" className={"Login_Password"} label="Password">
            <Text
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Label>
        </div>
        <div className={"Login_Buttons"}>
          <PrimaryButton variant="text" className="Switch">
            switch to login
          </PrimaryButton>
          <SecondaryButton className="Submit">Signup</SecondaryButton>
        </div>
      </Form>
    </div>
  );
};

export default Login;
