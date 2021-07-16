import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleDropdown from "./SingleDropdown";

const DropdownInput = ({
  options,
  setDropdown,
  selectDropdown,
  defaultColor,
}) => {
  const shouldRender = options.find(
    (data) => !!(data?.dropdown && data?.dropdown?.extras?.length)
  );
  if (!shouldRender) return null;
  return (
    <>
      <h2 style={{ fontSize: "18px", marginTop: "8px", color: defaultColor }}>
        Options
      </h2>
      {options.map((item) => (
        <SingleDropdown
          {...item}
          key={item._id}
          selectDropdown={selectDropdown}
          setDropdown={setDropdown}
          defaultColor={defaultColor}
        />
      ))}
    </>
  );
};

export default DropdownInput;
