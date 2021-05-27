import React from "react";
import { Modal } from "antd";
import { Banner, Layout } from "../Shared";
import SingleCategory from "./SingleCategory";
import { getTranslation } from "../../util";

const CategoryModal = ({ visible, onClose, menu, resTemplate }) => {
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      style={modalStyle}
      bodyStyle={modalBodyStyle}
      className="welcome close-btn-right"
    >
      <Banner text={getTranslation(menu)} />
      <Layout>
        {menu?.category?.map((category) => (
          <SingleCategory category={category} resTemplate={resTemplate} />
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
