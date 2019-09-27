import React, { useState } from "react";

import { DefaultButton, PrimaryButton } from "../../components/Button";
import Form from "../../components/Inputs/Form";
import Label from "../../components/Inputs/Label";
import Text from "../../components/Inputs/Text";
import style from "./Login.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={style.Login}>
      <Form className={style.Form}>
        <div className={style.Content}>
          <Label className={style.Email} label="Email">
            <Text
              className={style.Email}
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Label>
          <Label className={style.Password} label="Password">
            <Text
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Label>
        </div>
        <DefaultButton>Switch to login</DefaultButton>
        <PrimaryButton>Signup</PrimaryButton>
      </Form>
    </div>
  );
};

export default Login;
