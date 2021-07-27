import { InfoCircleOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getImage } from "../../util";
import MenuItemInfoModal from "./MenuItemInfoModal";
import MenuItemViewModal from "./MenuItemViewModal";

const SingleMenuItem = ({ item }) => {
  const [visible, setVisible] = useState("");
  const onCancel = () => setVisible("");
  const currency = useSelector(
    (state) => state?.info?.resInfo?.currency || "$"
  );
  const { general, itemImage } = useSelector(
    (state) => state?.info?.resTemplate || {}
  );
  const { defaultColor, itemColor } = general || {};

  const paraStyle = {
    color: defaultColor || "#9E9E9E",
    fontSize: "17px",
  };

  const translation =
    (Array.isArray(item.translation) && item.translation.length) > 0
      ? item.translation[0]
      : {};
  return (
    <div className="ml-2 mr-2 mt-3 mb-0">
      {itemImage && item.image && (
        <div
          style={{
            width: "100%",
            height: "50vw",
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
          <h3 style={{ fontSize: "20px", fontWeight: "900", color: itemColor }}>
            {translation.name || item.name}
          </h3>
          {(item?.allergens?.length || item?.ingredient) && (
            <InfoCircleOutlined
              style={{ color: itemColor }}
              className="ml-2 mt-1"
              onClick={() => setVisible("info")}
            />
          )}
        </div>
        <p style={paraStyle}>{translation.desc || item.desc}</p>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <p style={paraStyle}>
            {currency}
            {Number(item.price).toFixed(2)}
          </p>
          <PlusOutlined
            style={{ fontSize: "25px", color: defaultColor }}
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
