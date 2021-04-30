import { Modal } from "antd";
import React from "react";

const MenuItemInfoModal = ({
  visible,
  onCancel,
  allergens,
  ingredient,
  name,
}) => {
  return (
    <Modal visible={visible === "info"} onCancel={onCancel} footer={null}>
      <h3 style={{ color: "#000000", textAlign: "center", margin: "30px 0 0" }}>
        {name}
      </h3>

      <h2 style={headerStyle}>Allergen Information</h2>
      <div style={{ marginLeft: "10px" }}>
        <p>
          {allergens?.map(
            (item, idx) => `${item}${idx + 1 === allergens.length ? "." : ", "}`
          )}
        </p>
      </div>

      <h2 style={headerStyle}>Ingredients</h2>
      <p style={{ marginLeft: "10px" }}>{ingredient}</p>
    </Modal>
  );
};

export default MenuItemInfoModal;

const headerStyle = {
  color: "#787777",
  fontSize: "20px",
  margin: "20px 0 15px",
};
