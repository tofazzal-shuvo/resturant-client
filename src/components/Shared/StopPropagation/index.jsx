import React from "react";

const StopPropagation = ({ children, ...rest }) => {
  return (
    <div
      className="d-inline-block"
      onClick={(e) => {
        e.stopPropagation();
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default StopPropagation;
