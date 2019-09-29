import combineClasses from "combine-classes";
import React from "react";

import { OnTheme, Theme } from "../../common/theme";
import "./Snackbar.scss";

interface IBaseSnackbarProps extends ISnackbarProps {
  theme: Theme;
  onTheme: OnTheme;
}

const BaseSnackbar = ({ message, theme, onTheme }: IBaseSnackbarProps) => {
  return (
    <div className={combineClasses(theme, "SnackbarContainer")}>
      <p className={combineClasses(onTheme, "SnackbarText")}>{message}</p>
    </div>
  );
};

interface ISnackbarProps {
  message: string;
}

export const DangerSnackbar = (props: ISnackbarProps) => (
  <BaseSnackbar {...props} onTheme={OnTheme.onDanger} theme={Theme.danger} />
);
export const InfoSnackbar = (props: ISnackbarProps) => (
  <BaseSnackbar {...props} onTheme={OnTheme.onInfo} theme={Theme.info} />
);
export const SuccessSnackbar = (props: ISnackbarProps) => (
  <BaseSnackbar {...props} onTheme={OnTheme.onSuccess} theme={Theme.success} />
);
export const WarningSnackbar = (props: ISnackbarProps) => (
  <BaseSnackbar {...props} onTheme={OnTheme.onWarning} theme={Theme.warning} />
);
