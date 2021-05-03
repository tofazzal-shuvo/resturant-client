import { InfoCircleOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { getImage } from "../../util";
import MenuItemInfoModal from "./MenuItemInfoModal";
import MenuItemViewModal from "./MenuItemViewModal";

const SingleMenuItem = ({ item }) => {
  const [visible, setVisible] = useState("");
  const onCancel = () => setVisible("");
  console.log(item.image);
  return (
    <div className="m-2 mt-4 mb-4">
      {item.image && (
        <div
          style={{
            width: "100%",
            height: " 50vw",
            backgroundImage: `url(${getImage(item.image)})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      )}
      <div
        style={{
          border: "1px solid #DADBDA",
          padding: "10px",
        }}
      >
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
            style={{ fontSize: "25px" }}
            onClick={() => setVisible("view")}
          />
        </div>
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
