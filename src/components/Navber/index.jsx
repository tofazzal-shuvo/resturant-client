import React from "react";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navber = () => {
  const { pathname } = useLocation();
  const { addedItems } = useSelector((state) => state.cart);
  const { background, iconColor, badgeColor, textColor } = useSelector(
    (state) => state?.info?.resTemplate?.bottomNavigation || {}
  );

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
    <div className="d-flex justify-content-around menu" style={{ background }}>
      {menuItems.map((item, idx) => (
        <div className="position-relative" key={item.path}>
          {item.text === "YOUR ORDER" && (
            <span style={spanStyle}>{addedItems.length}</span>
          )}
          <Link to={item.path} className="text-center" key={item.path}>
            <span className="d-block" style={{ color: iconColor }}>
              {item.icon}
            </span>
            <Badge
              dot={showMark(item.path, idx)}
              style={{ background: badgeColor }}
            >
              <span className="menu-text" style={{ color: textColor }}>
                {item.text}
              </span>
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
  right: "30px",
  fontSize: "15px",
};
