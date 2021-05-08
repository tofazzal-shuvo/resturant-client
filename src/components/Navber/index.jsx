import React, { useEffect, useState } from "react";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  SoundOutlined,
} from "@ant-design/icons";

const Navber = () => {
  const { pathname } = useLocation();
  const { card } = useSelector((state) => state);

  const [count, setCount] = useState(0);

  useEffect(() => {
    // let qty = 0;
    // Object.values(card).map((item) => {
    //   qty += item.quantity;
    // });
    // setCount(qty);
  }, [card]);
  // console.log({ pathname });
  const show =
    pathname === "/menu" ||
    pathname === "/menu/items" ||
    pathname === "/cart" ||
    pathname === "/complete-order" ||
    pathname === "/comming-soon" ||
    pathname === "/call-waiter" ||
    pathname === "/ask-for-waiter" ||
    pathname === "/ask-for-bill";

  if (!show) return null;

  const menuItems = [
    {
      text: "MENU",
      path: `/menu`,
      icon: <i className="fas fa-utensils"></i>,
    },
    {
      text: "YOUR ORDER",
      path: `/cart`,
      icon: <i className="fas fa-check-square"></i>,
    },
    {
      text: "WAITER",
      path: `/call-waiter`,
      icon: <i className="fas fa-allergies"></i>,
    },
  ];
  const showMark = (currentPath, idx) => {
    if (idx === 0) {
      const data = pathname === "/menu" || pathname === "/menu/items";
      return data;
    } else if (idx === 1) {
      const data = pathname === "/complete-order" || pathname === "/cart";
      return data;
    } else if (idx === 2) {
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
        <div className="position-relative" key={item.path}>
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

export default Navber;

const spanStyle = {
  position: "absolute",
  color: "red",
  top: "-3px",
  right: "20px",
  fontSize: "15px",
};
