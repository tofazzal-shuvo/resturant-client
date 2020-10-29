import {
  HomeOutlined,
  ShoppingCartOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const { pathname } = useLocation();
  const count = useSelector((state) => Object.keys(state.card).length);

  const show =
    pathname === "/menu-items" ||
    pathname === "/cards" ||
    pathname === "/complete-order" ||
    pathname === "/comming-soon" ||
    pathname === "/call-waiter" ||
    pathname === "/ask-for-waiter" ||
    pathname === "/ask-for-bill";

  if (!show) return null;

  const menuItems = [
    {
      text: "Menu",
      path: `/menu-items`,
      icon: <HomeOutlined style={{ fontSize: "30px" }} />,
    },
    {
      text: "View cart",
      path: `/cards`,
      icon: <ShoppingCartOutlined style={{ fontSize: "30px" }} />,
    },
    {
      text: "Call waiter",
      path: `/call-waiter`,
      icon: <SoundOutlined style={{ fontSize: "30px" }} />,
    },
  ];
  const showMark = (currentPath, idx) => {
    if (idx === 2) {
      const data =
        pathname === "/comming-soon" ||
        pathname === "/call-waiter" ||
        pathname === "/ask-for-waiter" ||
        pathname === "/ask-for-bill";
      return data;
    }

    return currentPath === pathname;
  };
  return (
    <div className="d-flex justify-content-around menu">
      {menuItems.map((item, idx) => (
        <div className="position-relative">
          {item.text === "View cart" && <span style={spanStyle}>{count}</span>}
          <Link to={item.path} className="text-center" key={item.path}>
            <span className="d-block">{item.icon}</span>
            <Badge dot={showMark(item.path, idx)}>
              <span className="menu-text">{item.text}</span>
            </Badge>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;

const spanStyle = {
  position: "absolute",
  color: "red",
  top: "-3px",
  right: "20px",
  fontSize: "15px",
};
