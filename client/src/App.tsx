import "./App.scss";

import React, { useState } from "react";

import {
  DangerButton,
  DefaultButton,
  PrimaryButton,
  SecondaryButton,
  SuccessButton
} from "./components/Button";

const App: React.FC = () => {
  return (
    // note that theme styles cannot be applied to App itself.
    <div className={"App"}>
      <SuccessButton>SuccessButton</SuccessButton>
      <SecondaryButton>SecondaryButton</SecondaryButton>
      <PrimaryButton>PrimaryButton</PrimaryButton>
      <DangerButton>DangerButton</DangerButton>
    </div>
  );
};

export default App;
