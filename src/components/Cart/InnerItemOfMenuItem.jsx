import React from "react";

const InnerItemOfMenuItem = ({
  title,
  options = [],
  from = "",
  defaultColor,
}) => {
  if (!options.length) return null;
  return (
    <p style={{ fontSize: "16px", color: defaultColor }}>
      <span style={{ fontWeight: "bold", fontSize: "18px" }}>{title}: </span>
      {options.map(
        ({ name, quantity }, idx) =>
          `${from === "extra" ? `${quantity} ${name}` : name}${
            options.length !== idx + 1 ? ", " : ""
          }`
      )}
    </p>
  );
};

export default InnerItemOfMenuItem;
