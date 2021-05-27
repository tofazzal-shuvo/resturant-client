import React from "react";
import { getTranslation } from "../../util";
import InnerItemOfMenuItem from "./InnerItemOfMenuItem";

const Recommendation = ({ dropdowns, sizing, ...rest }) => {
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
        {getTranslation(rest)}
      </h3>

      <InnerItemOfMenuItem title="Options" options={dropdowns} />
      <InnerItemOfMenuItem title="Sizing" options={sizing} />
    </div>
  );
};

export default Recommendation;
