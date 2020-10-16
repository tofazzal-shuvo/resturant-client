import {
  HomeOutlined,
  ShoppingCartOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const show =
    pathname === "/menu-items" ||
    pathname === "/cards" ||
    pathname === "/call-waiter" ||
    pathname === "/comming-soon";
  if (!show) return null;
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

const menuItems = [
  {
    text: "Menu",
    path: "/menu-items",
    icon: <HomeOutlined style={{ fontSize: "30px" }} />,
  },
  {
    text: "View card",
    path: "/cards",
    icon: <ShoppingCartOutlined style={{ fontSize: "30px" }} />,
  },
  {
    text: "Call weater",
    path: "/call-waiter",
    icon: <SoundOutlined style={{ fontSize: "30px" }} />,
  },
];
export default Menu;
