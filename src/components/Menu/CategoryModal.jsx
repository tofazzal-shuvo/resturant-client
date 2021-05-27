import React from "react";
import { Modal } from "antd";
import { Banner, Layout } from "../Shared";
import SingleCategory from "./SingleCategory";
import { getTranslation } from "../../util";
import { useSelector } from "react-redux";

const CategoryModal = ({ visible, onClose, menu, resTemplate }) => {
  const background = useSelector(
    (state) => state?.info?.resTemplate?.general.background
  );
  const modalBodyStyle = {
    height: "100vh",
    overflowY: "scroll",
    padding: 0,
    background,
  };
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      style={modalStyle}
      bodyStyle={modalBodyStyle}
      className="custom-positioning-modal welcome close-btn-right"
    >
      <Banner text={getTranslation(menu)} />
      <Layout>
        {menu?.category?.map((category) => (
          <SingleCategory
            category={category}
            resTemplate={resTemplate}
            key={category._id}
          />
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
