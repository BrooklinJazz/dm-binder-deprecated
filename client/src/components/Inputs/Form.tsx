import combineClasses from "combine-classes";
import React, { ReactNode } from "react";

import style from "./Input.module.scss";

interface IFormProps extends React.HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, onSubmit, ...props }: IFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <form
      {...props}
      onSubmit={handleSubmit}
      className={combineClasses(style.Form, props.className)}
    >
      {children}
    </form>
  );
};

export default Form;
