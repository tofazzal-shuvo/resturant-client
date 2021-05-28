import React from "react";
import SingleDropdown from "./SingleDropdown";

const DropdownInput = ({
  options,
  setDropdown,
  selectDropdown,
  defaultColor,
}) => {
  // console.log({ options });
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
