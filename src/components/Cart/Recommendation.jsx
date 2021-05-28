import React from "react";
import { getTranslation } from "../../util";
import InnerItemOfMenuItem from "./InnerItemOfMenuItem";

const Recommendation = ({ dropdowns, sizing, defaultColor, ...rest }) => {
  return (
    <div className="ml-2">
      <h3
        style={{
          color: defaultColor || "black",
          textTransform: "capitalize",
          fontWeight: "700",
          fontSize: "26px",
        }}
      >
        {getTranslation(rest)}
      </h3>

      <InnerItemOfMenuItem
        title="Options"
        options={dropdowns}
        defaultColor={defaultColor}
      />
      <InnerItemOfMenuItem
        title="Sizing"
        options={sizing}
        defaultColor={defaultColor}
      />
    </div>
  );
};

export default Recommendation;
