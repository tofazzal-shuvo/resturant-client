import {
  HomeOutlined,
  ShoppingCartOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const { pathname } = useLocation();

  const show =
    pathname === "/menu-items" ||
    pathname === "/cards" ||
    pathname === "/call-waiter" ||
    pathname === "/comming-soon" ||
    pathname === "/complete-order";
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
      text: "Call weater",
      path: `/call-waiter`,
      icon: <SoundOutlined style={{ fontSize: "30px" }} />,
    },
  ];

  return (
    <div className="d-flex justify-content-around menu">
      {menuItems.map((item) => (
        <Link to={item.path} className="text-center" key={item.path}>
          <span className="d-block">{item.icon}</span>
          <Badge dot={pathname === item.path}>
            <span className="menu-text">{item.text}</span>
          </Badge>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
