import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";

const ExpandedIcon = ({ isActive, size = "" }) => {
  const fontSize = size === "small" ? "" : "14px";
  const iconStyle = {
    // border: "1px solid rgba(0,0,0,.85)",
    color: "rgba(0,0,0,.85)",
    borderRadius: "50%",
    padding: "3px",
    margin: "0 5px",
  };
  return (
    <div className="d-flex align-items-center expended-icon" style={{ marginLeft: "-12px" }}>
      <CaretRightOutlined
        rotate={isActive ? 90 : 0}
        style={{ ...iconStyle, fontSize }}
      />
    </div>
  );
};

export default ExpandedIcon;
