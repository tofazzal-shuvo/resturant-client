/* eslint-disable react/jsx-no-undef */
import React, { useContext } from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

// Index Routes
import { Public } from "./Router";
import Navber from "../components/Navber";
import { useSelector } from "react-redux";
import { LanguageContext } from "../context";
import { Select } from "antd";

// Components
export const history = createBrowserHistory();

const RouterConfig = () => {
  const { locale, onChangeLang } = useContext(LanguageContext);
  const background = useSelector(
    (state) => state?.info?.resTemplate?.general.background
  );
  return (
    <div
      style={{
        paddingBottom: "91px",
        background: background || "#fff",
        minHeight: "100vh",
        position: "relative",
        overflow: "auto",
      }}
    >
      <div className="language-selector">
        <Select onChange={onChangeLang} value={locale}>
          <Select.Option value="en">English</Select.Option>
          <Select.Option value="bn">Bangali</Select.Option>
        </Select>
        <i
          class="fa fa-language"
          aria-hidden="true"
          style={{
            background: "#fff",
            padding: "6.5px 4px",
            fontSize: "18px",
            borderRadius: "50%",
            marginLeft: "5px",
          }}
        ></i>
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
