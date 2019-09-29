import combineClasses from "combine-classes";
import React, { ReactNode } from "react";

import Loading from "../Loading";
import { DangerSnackbar } from "../Snackbar";
import style from "./Input.module.scss";

interface IFormProps extends React.HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  error?: string;
}

const Form = ({
  children,
  onSubmit,
  isLoading,
  error,
  ...props
}: IFormProps) => {
  const [submitted, setSubmitted] = React.useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitted(true);
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <>
      <form
        {...props}
        onSubmit={handleSubmit}
        className={combineClasses(style.Form, props.className)}
      >
        {children}
        {isLoading && <Loading />}
      </form>
      {submitted && error && <DangerSnackbar message={error} />}
    </>
  );
};

export default Form;
