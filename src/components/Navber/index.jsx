import React from "react";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";

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
      text: <FormattedMessage id="APP.NAVBER.MENU" />,
      // "MENU",
      path: `/menu`,
      icon: <i className="fas fa-utensils"></i>,
    },
    {
      text: <FormattedMessage id="APP.NAVBER.YOUR_ORDER" />,
      // "YOUR ORDER",
      path: `/cart`,
      icon: <i className="fas fa-check-square"></i>,
    },
    {
      text: <FormattedMessage id="APP.NAVBER.WAITER" />,
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
        <div key={item.path}>
          <Link to={item.path} className="text-center" key={item.path}>
            <div>
              <span
                className="d-inline-block position-relative"
                style={{ color: iconColor }}
              >
                {item.path === "/cart" && (
                  <span style={spanStyle}>{addedItems.length}</span>
                )}
                {item.icon}
              </span>
            </div>
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
  left: "122%",
  fontSize: "15px",
};
