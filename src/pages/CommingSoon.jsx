import { ClockCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const CommingSoon = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <img src="/img/logo.png" alt="logo" className="img-fluid mt-5 mb-5" />
        <div className="mt-5">
          <Button style={buttonStyle} className="not-active">
            Waiter comming soon
          </Button>
          <ClockCircleOutlined
            style={{ color: "#6d9d62", marginBottom: "30px" }}
          />
          <Button style={buttonStyle} className="not-active">
            Bill on it's way
          </Button>
        </div>
      </div>
    </div>
  </div>
);
export default CommingSoon;

const buttonStyle = {
  border: "none",
  paddingLeft: 0,
  paddingRight: 0,
  display: "block",
  margin: "auto",
  marginBottom: "30px",
  fontSize: "1.5rem",
};
