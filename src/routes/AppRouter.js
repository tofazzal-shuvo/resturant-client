/* eslint-disable react/jsx-no-undef */
import React, { useContext } from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

// Index Routes
import { Public } from "./Router";
import Navber from "../components/Navber";
import { useSelector } from "react-redux";
import { LanguageContext } from "../context";

// Components
export const history = createBrowserHistory();

const RouterConfig = () => {
  const { locale, onChangeLang } = useContext(LanguageContext);
  const { background } = useSelector(
    (state) => state?.info?.resTemplate?.general || {}
  );
  // console.log({ background });
  const onChangeSelect = (e) => onChangeLang(e.target.value);
  return (
    <div
      style={{
        paddingBottom: "91px",
        background: background || "#fff",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, zIndex: "200000" }}>
        <select onChange={onChangeSelect} value={locale}>
          <option value="en">English</option>
          <option value="bn">Bangali</option>
        </select>
      </div>
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
