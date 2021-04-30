import React from "react";
import { Modal } from "antd";
import { Banner, Layout } from "../Shared";
import SingleCategory from "./SingleCategory";

const CategoryModal = ({ visible, onClose, menu }) => {
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      style={modalStyle}
      bodyStyle={modalBodyStyle}
      className="welcome close-btn-right"
    >
      <Banner text={menu.name} />
      <Layout>
        {menu?.category?.map((category) => (
          <SingleCategory category={category} />
        ))}
      </Layout>
    </Modal>
  );
};

export default CategoryModal;

// styles
const modalStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  top: 0,
};
const modalBodyStyle = {
  height: "100vh",
  overflowY: "scroll",
  padding: 0,
};
