import React, { useState } from "react";
import SingleSizing from "./SingleSizing";

const SizingInput = ({
  selectSizing,
  setSizing,
  options,
}) => {
  const defaultSelected = [];
  return (
    <>
      <h2 style={{ fontSize: "18px", marginTop: "8px" }}>Sizing</h2>
      {options.map((item) => (
        <SingleSizing
          {...item}
          defaultSelected={defaultSelected}
          key={item._id}
          selectSizing={selectSizing}
          setSizing={setSizing}
        />
      ))}
    </>
  );
};

export default SizingInput;
