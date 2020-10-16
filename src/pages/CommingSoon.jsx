import { ClockCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const CommingSoon = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="/img/logo.png" alt="logo" className="img-fluid mt-5 mb-5" />
          <div className="mt-5">
            <Button
              style={{
                border: "none",
                paddingLeft: 0,
                paddingRight: 0,
                display: "block",
                margin: "auto",
                marginBottom: "30px",
                fontSize: "1.5rem",
              }}
            >
              Waiter comming soon
            </Button>
            <ClockCircleOutlined style={{ color: "#6d9d62", marginBottom: "30px" }} />
            <Button
              style={{
                border: "none",
                paddingLeft: 0,
                paddingRight: 0,
                display: "block",
                margin: "auto",
                fontSize: "1.5rem",
              }}
            >
              Bill on it's way
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommingSoon;
