import React, { useState } from "react";
import SingleSizing from "./SingleSizing";

const SizingInput = ({ selectSizing, setSizing, options, defaultColor }) => {
  const defaultSelected = [];
  const shouldRender = options.find((data) => !!data?.items?.length);
  if (!!shouldRender) return null;
  return (
    <>
      <h2 style={{ fontSize: "18px", marginTop: "8px", color: defaultColor }}>
        Sizing
      </h2>
      {options.map((item) => (
        <SingleSizing
          {...item}
          defaultSelected={defaultSelected}
          key={item._id}
          selectSizing={selectSizing}
          setSizing={setSizing}
          defaultColor={defaultColor}
        />
      ))}
    </>
  );
};

export default SizingInput;
