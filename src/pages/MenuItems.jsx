import React, { useEffect, useState } from "react";
import { ReadOutlined } from "@ant-design/icons";
import { Button, Spin, Modal } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_MEUNU } from "../graphql/modules";
import Category from "../components/Menu/Category";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const MenuItems = () => {
  const [category, setCategory] = useState({});
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

  const categoryName =
    category?.translation?.length === 0
      ? category?.category
      : Array.isArray(category?.translation) && category?.translation[0].name;

  useEffect(() => {
    setCategory(menu[0]);
  }, [menu]);

  useEffect(() => {
    if (!restaurantId) history.push("/welcome");
  }, [restaurantId]);

  return (
    <Spin spinning={loading}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mt-3 mb-3">
              <ReadOutlined style={{ fontSize: "30px" }} onClick={onOpen} />
            </div>
            <div className="text-center">
              <img src="/img/logo.png" alt="logo" className="img-fluid mb-3" />
            </div>
            <div
              style={{
                backgroundColor: menuStyle.backgroundColor,
                padding: "10px",
              }}
            >
              <h2
                style={{
                  color: menuStyle.color || "#6d9d62",
                  fontFamily: menuStyle.fontFamily || "inherit",
                }}
                className="mb-4"
              >
                {categoryName}
              </h2>
              <Category category={category} menuStyle={menuStyle} />
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Filter menu"
        visible={open}
        onOk={onClose}
        onCancel={onClose}
        footer={null}
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          top: 0,
        }}
        bodyStyle={{
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        <div>
          {menu.map((item) => (
            <SingleMenuItems
              key={item._id}
              item={item}
              setCategory={setCategory}
              setOpen={setOpen}
            />
          ))}
        </div>
      </Modal>
    </Spin>
  );
};
export default MenuItems;

// filter component
const SingleMenuItems = ({ item, setCategory, setOpen }) => {
  return (
    <Button
      style={{
        display: "block",
        border: "none",
        paddingLeft: 0,
        paddingRight: 0,
        fontSize: "1.5rem",
        color: "#6d9d62",
        marginBottom: "10px",
        textTransform: "capitalize",
      }}
      onClick={() => {
        setCategory(item);
        setOpen(false);
      }}
    >
      {item.category}
    </Button>
  );
};
