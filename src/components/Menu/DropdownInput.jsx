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
  // console.log({ options });
  const [show, setShow] = useState(true);
  useEffect(() => {
    let data = false;
    options.map((item) => {
      if (item?.dropdown) data = true;
    });
    setShow(data);
  }, [options]);
  if (!show) return false;
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
