import React from "react";

const StopPropagation = ({ children }) => {
  return (
    <div
      className="d-inline-block"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {children}
    </div>
  );
};

export default StopPropagation;
