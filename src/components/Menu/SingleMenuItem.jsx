import { InfoCircleOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import MenuItemInfoModal from "./MenuItemInfoModal";
import MenuItemViewModal from "./MenuItemViewModal";

const SingleMenuItem = ({ item }) => {
  const [visible, setVisible] = useState("view");
  const onCancel = () => setVisible("");
  return (
    <div className="m-2">
      <div className="d-flex align-items-center">
        <h3 style={{ fontSize: "20px", fontWeight: "900" }}>{item.name}</h3>
        <InfoCircleOutlined
          className="ml-2 mt-1"
          onClick={() => setVisible("info")}
        />
      </div>
      <p style={paraStyle}>{item.desc}</p>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <p style={paraStyle}>${item.price}</p>{" "}
        <PlusOutlined
          style={{ fontSize: "30px" }}
          onClick={() => setVisible("view")}
        />
      </div>
      <MenuItemViewModal visible={visible} onCancel={onCancel} {...item} />
      <MenuItemInfoModal visible={visible} onCancel={onCancel} {...item} />
    </div>
  );
};

export default SingleMenuItem;

const paraStyle = {
  color: "#9E9E9E",
  fontSize: "17px",
};
