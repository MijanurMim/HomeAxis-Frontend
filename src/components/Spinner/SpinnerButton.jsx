/** @format */

import React from "react";
import { Watch } from "react-loader-spinner";

const SpinnerButton = () => {
  return (
    <>
      <div className=" flex justify-center">
        <Watch color="#FF9800" ariaLabel="loading" height="20px" width="20px" />
      </div>
    </>
  );
};

export default SpinnerButton;
