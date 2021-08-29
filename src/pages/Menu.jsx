import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Menu, MenuItems } from '../components/Menu';

const MenuPage = (props) => {
  // console.log({match})
  return <Menu {...props} />;
};

export default MenuPage;
