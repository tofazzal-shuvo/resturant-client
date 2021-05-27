import { Modal } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const MenuItemInfoModal = ({
  visible,
  onCancel,
  allergens,
  ingredient,
  name,
}) => {
  const background = useSelector(
    (state) => state?.info?.resTemplate?.general.background
  );
  const modalBodyStyle = {
    height: "100vh",
    overflowY: "scroll",
    padding: 0,
    // background,
  };
  
  return (
    <Modal
      visible={visible === "info"}
      onCancel={onCancel}
      footer={null}
      style={modalStyle}
      bodyStyle={modalBodyStyle}
      className="custom-positioning-modal close-left"
    >
      <h3 style={{ color: "#000000", textAlign: "center", margin: "30px 0 0" }}>
        {name}
      </h3>

      <h2 style={headerStyle}>Allergen Information</h2>
      <div style={{ marginLeft: "10px" }}>
        <p>
          {allergens?.map(
            (item, idx) => `${item?.name}${idx + 1 === allergens.length ? "." : ", "}`
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

const modalStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  top: 0,
};