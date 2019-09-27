import combineClasses from "combine-classes";
import React, { ReactNode } from "react";

import style from "./Input.module.scss";

interface IFormProps extends React.HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form = ({ children, ...props }: IFormProps) => (
  <form {...props} className={combineClasses(style.Form, props.className)}>
    {children}
  </form>
);

export default Form;
