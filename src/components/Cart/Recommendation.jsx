import React from "react";
import InnerItemOfMenuItem from "./InnerItemOfMenuItem";

const Recommendation = ({ name, dropdowns, sizing, extras }) => {
  return (
    <div className="ml-2">
      <h3
        style={{
          color: "black",
          textTransform: "capitalize",
          fontWeight: "700",
          fontSize: "26px",
        }}
      >
        {name}
      </h3>

      <InnerItemOfMenuItem title="Options" options={dropdowns} />
      <InnerItemOfMenuItem title="Sizing" options={sizing} />
    </div>
  );
};

export default Recommendation;
