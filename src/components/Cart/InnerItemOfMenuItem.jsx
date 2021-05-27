import React from "react";
import { getTranslation } from "../../util";

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
        ({ quantity, ...rest }, idx) =>
          `${
            from === "extra"
              ? `${quantity} ${getTranslation(rest)}`
              : getTranslation(rest)
          }${options.length !== idx + 1 ? ", " : ""}`
      )}
    </p>
  );
};

export default InnerItemOfMenuItem;
