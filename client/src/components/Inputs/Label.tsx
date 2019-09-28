import combineClasses from "combine-classes";
import React, { ReactNode } from "react";

import style from "./Input.module.scss";

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  label: string;
  for: string;
}

const Label = ({ label, children, ...props }: ILabelProps) => {
  const child = React.cloneElement(children as any, {
    id: props.for
  });
  return (
    <label {...props} className={combineClasses(style.Label)}>
      {label}
      {child}
    </label>
  );
};

export default Label;
