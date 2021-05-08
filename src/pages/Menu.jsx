import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Menu, MenuItems } from "../components/Menu";

const MenuPage = ({ location, match }) => {
  // console.log({match})
  return (
    <Switch location={location}>
      <Route path={`${match.path}/`} exact={true} component={Menu} />
      <Route path={`${match.path}/items`} exact={true} component={MenuItems} />
    </Switch>
  );
};

export default MenuPage;
