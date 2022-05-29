/** @format */

import React from "react";
import { Watch } from "react-loader-spinner";

const Spinner = () => {
  return (
    <>
      <div className="my-80 flex justify-center">
        <Watch color="#FF9800" ariaLabel="loading" />
      </div>
    </>
  );
};

export default Spinner;
