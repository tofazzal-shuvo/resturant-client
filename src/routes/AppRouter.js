/* eslint-disable react/jsx-no-undef */
import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

// Index Routes
import { Public } from "./Router";
import Navber from "../components/Navber";
import { useSelector } from "react-redux";

// Components
export const history = createBrowserHistory();

const RouterConfig = () => {
  const { background } = useSelector(
    (state) => state?.info?.resTemplate?.general || {}
  );
  console.log({ background });
  return (
    <div
      style={{
        paddingBottom: "91px",
        background: background || "#fff",
        minHeight: "100vh",
      }}
    >
      <Router history={history}>
        <Switch>
          {Public.map((R, k) => {
            return <Route key={k} {...R} />;
          })}
        </Switch>
        <Navber />
      </Router>
    </div>
  );
};

export const AppRouter = RouterConfig;
