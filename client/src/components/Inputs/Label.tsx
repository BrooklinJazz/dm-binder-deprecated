import combineClasses from "combine-classes";
import React, { ReactNode } from "react";

import style from "./Input.module.scss";

interface ITextProps extends React.HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  label: string;
}

const Label = ({ label, children, ...props }: ITextProps) => (
  <label {...props} className={combineClasses(style.Label, props.className)}>
    {label}
    {children}
  </label>
);

export default Label;
