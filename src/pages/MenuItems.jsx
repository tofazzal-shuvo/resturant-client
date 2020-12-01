import React, { useEffect, useState } from "react";
import { ReadOutlined } from "@ant-design/icons";
import { Spin, Modal } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_MEUNU } from "../graphql/modules";
import Category from "../components/Menu/Category";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Element } from "react-scroll";
import { FilterItem } from "../components/MenuItems";

const MenuItems = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const { restaurantId, lang } = useSelector((state) => state.info);

  // functions
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  // query
  const { data, loading } = useQuery(FETCH_MEUNU, {
    variables: {
      limit: 100,
      offset: 0,
      resId: restaurantId,
      lang,
    },
  });
  const menu = data?.FetchMenuByRestaurantId?.result || [];
  const menuStyle = data?.FetchMenuByRestaurantId?.restaurant?.menuStyle || {};

  // setting default data
  useEffect(() => {
    if (!restaurantId) history.push("/language");
  }, [restaurantId]);

  // style defination
  const menuItemStyle = {
    backgroundColor: menuStyle.backgroundColor,
    padding: "10px",
    marginTop: "10px",
  };
  const cetagoryStyle = {
    color: menuStyle.color || "#6d9d62",
    fontFamily: menuStyle.fontFamily || "inherit",
  };
  return (
    <Spin spinning={loading}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mt-3 mb-3 position-fixed custom-filter">
              <ReadOutlined style={{ fontSize: "30px" }} onClick={onOpen} />
            </div>
            <div className="text-center mt-5">
              <img src="/img/logo.png" alt="logo" className="img-fluid mb-3" />
            </div>
            {menu.map((item) => (
              <Element name={item._id} key={item._id}>
                <div style={menuItemStyle}>
                  <h2 style={cetagoryStyle} className="mb-4">
                    {item?.translation?.length === 0
                      ? item?.category
                      : Array.isArray(item?.translation) &&
                        item?.translation[0].name}
                  </h2>
                  <Category category={item} menuStyle={menuStyle} />
                </div>
              </Element>
            ))}
          </div>
        </div>
      </div>
      <Modal
        title="Filter menu"
        visible={open}
        onCancel={onClose}
        footer={null}
        style={modalStyle}
        bodyStyle={modalBodyStyle}
      >
        <div>
          {menu.map((item) => (
            <FilterItem
              key={item._id}
              item={item}
              onClose={onClose}
              open={open}
            />
          ))}
        </div>
      </Modal>
    </Spin>
  );
};
export default MenuItems;

// styles
const modalStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  top: 0,
};
const modalBodyStyle = {
  height: "100vh",
  overflowY: "scroll",
};
