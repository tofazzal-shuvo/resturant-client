import React, { useContext, useEffect } from 'react';
import { Badge, Button } from 'antd';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { NavbarContext } from '../../context';
import styled from 'styled-components';

const Navber = () => {
  const { pathname } = useLocation();
  const { addedItems } = useSelector((state) => state.cart);
  const { background, iconColor, badgeColor, textColor } = useSelector(
    (state) => state?.info?.resTemplate?.bottomNavigation || {}
  );

  const { showOrderBtn, setShowOrderBtn, createOrder, createOrderLoading } = useContext(NavbarContext);

  useEffect(() => {
    if (pathname === '/cart') {
      setShowOrderBtn(true);
    } else {
      setShowOrderBtn(false);
    }
  }, [pathname]);

  const show =
    // pathname === "/menu" ||
    pathname === '/menu/items' ||
    pathname === '/cart' ||
    pathname === '/complete-order' ||
    pathname === '/comming-soon' ||
    pathname === '/call-waiter' ||
    pathname === '/ask-for-waiter' ||
    pathname === '/ask-for-bill';

  if (!show) return null;

  const menuItems = [
    {
      text: <FormattedMessage id="APP.NAVBER.MENU" />,
      path: `/menu/items`,
      icon: <i className="fas fa-utensils"></i>,
    },
    {
      text: <FormattedMessage id="APP.NAVBER.YOUR_ORDER" />,
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
      const data = pathname === '/menu' || pathname === '/menu/items';
      return data;
    } else if (idx === 1) {
      const data = pathname === '/complete-order' || pathname === '/cart';
      return data;
    } else if (idx === 2) {
      const data =
        pathname === '/comming-soon' ||
        pathname === '/call-waiter' ||
        pathname === '/ask-for-waiter' ||
        pathname === '/ask-for-bill';
      return data;
    }

    return currentPath === pathname;
  };
  const spanStyle = {
    position: 'absolute',
    top: '-3px',
    left: '122%',
    fontSize: '15px',
    color: badgeColor,
  };

  console.log(showOrderBtn);

  return (
    <React.Fragment>
      <div className="menu d-flex flex-column">
        {addedItems?.length !== 0 && showOrderBtn && (
          <div className="cart" style={{ background: '#ddd', padding: 10 }}>
            <div className="cart-action text-center">
              <OrderButton
                disabled={!addedItems.length}
                className="order-btn "
                onClick={createOrder}
                loading={createOrderLoading}
              >
                Order
              </OrderButton>
            </div>
          </div>
        )}
        <div
          className="d-flex justify-content-around "
          style={{ background: background || '#f8f7f8', padding: '5px 0 15px 0px' }}
        >
          {menuItems.map((item, idx) => (
            <div key={item.path}>
              <Link to={item.path} className="text-center" key={item.path}>
                <div>
                  <span className="d-inline-block position-relative" style={{ color: iconColor }}>
                    {item.path === '/cart' && addedItems?.length !== 0 && (
                      <span style={spanStyle}>{addedItems.length}</span>
                    )}
                    {item.icon}
                  </span>
                </div>
                <Badge dot={showMark(item.path, idx)} style={{ background: badgeColor }}>
                  <span className="menu-text" style={{ color: textColor }}>
                    {item.text}
                  </span>
                </Badge>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navber;

const OrderButton = styled(Button)`
  background: #444;
  span {
    color: #fff;
    text-transform: uppercase
  }
`;
