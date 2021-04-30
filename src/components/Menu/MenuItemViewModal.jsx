import React from "react";
import { Modal } from "antd";
import SizingInput from "./SizingInput";

const MenuItemViewModal = ({
  visible,
  name,
  price,
  onCancel,
  recommendations,
  sizings,
  extras,
  dropdowns,
  image,
  desc,
  ...rest
}) => {
  console.log(rest);
  return (
    <Modal
      visible={visible === "view"}
      onCancel={onCancel}
      footer={null}
      bodyStyle={{ padding: "0" }}
    >
      <div
        style={{
          paddingTop: "20vh",
          backgroundImage: `url(https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2
          style={{
            backgroundColor: "rgba(255, 255, 255, .6)",
            padding: "3px 7px",
          }}
        >
          {name}
        </h2>
      </div>
      <div style={{ padding: "0 7px" }}>
        <p
          className="desc"
          style={{
            fontSize: "18px",
            color: "#656464",
            marginTop: "25px",
          }}
        >
          {desc}
          <span className="d-block text-right">${price}</span>
        </p>
        <div
          style={{
            borderBottom: "1px solid #D8D8D8",
          }}
        ></div>
        <SizingInput title="Sizing" options={sizings} />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          non ipsum, iusto quae, amet fugiat expedita molestias tempore fuga
          libero molestiae quibusdam! Voluptate vero alias natus maxime iste qui
          repellendus?
        </p>
      </div>
    </Modal>
  );
};

export default MenuItemViewModal;
