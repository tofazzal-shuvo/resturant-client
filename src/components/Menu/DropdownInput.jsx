import React from "react";
import SingleDropdown from "./SingleDropdown";

const DropdownInput = ({ options, setDropdown, selectDropdown }) => {
  // console.log({ options });
  return (
    <>
      <h2 style={{ fontSize: "18px", marginTop: "8px" }}>Options</h2>
      {options.map((item) => (
        <SingleDropdown
          {...item}
          key={item._id}
          selectDropdown={selectDropdown}
          setDropdown={setDropdown}
        />
      ))}
    </>
  );
};

export default DropdownInput;
