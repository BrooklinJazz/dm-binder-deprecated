import combineClasses from "combine-classes";
import React from "react";

import "./Button.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const BaseButton = (props: IButtonProps) => (
  <button {...props} className={combineClasses("Base", props.className)} />
);

export const DefaultButton = (props: IButtonProps) => (
  <BaseButton
    {...props}
    className={combineClasses("DefaultButton", props.className)}
  />
);

export const PrimaryButton = (props: IButtonProps) => (
  <BaseButton
    {...props}
    className={combineClasses("PrimaryButton", props.className)}
  />
);

export const SecondaryButton = (props: IButtonProps) => (
  <BaseButton
    {...props}
    className={combineClasses("SecondaryButton", props.className)}
  />
);

export const SuccessButton = (props: IButtonProps) => (
  <BaseButton
    {...props}
    className={combineClasses("SuccessButton", props.className)}
  />
);

export const DangerButton = (props: IButtonProps) => (
  <BaseButton
    {...props}
    className={combineClasses("DangerButton", props.className)}
  />
);
