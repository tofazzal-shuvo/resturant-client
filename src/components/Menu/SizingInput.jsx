import React from "react";
import SingleSizing from "./SingleSizing";

const SizingInput = ({ title, options }) => {
  console.log({ options });
  return (
    <>
      <h2>{title}</h2>
      {options.map((item) => (
        <SingleSizing {...item} key={item._id} />
      ))}
    </>
  );
};

export default SizingInput;
