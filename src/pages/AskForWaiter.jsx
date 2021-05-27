import { ClockCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Banner } from "../components/Shared";

const AskForWaiter = () => {
  const history = useHistory();
  const defaultColor = useSelector(
    (state) => state?.info?.resTemplate?.general?.defaultColor || ""
  );

  const redirect = () => history.push("/ask-for-bill");

  const buttonStyle = {
    border: "none",
    color: defaultColor || "#4B4B4B",
    paddingLeft: 0,
    paddingRight: 0,
    display: "block",
    margin: "auto",
    marginBottom: "15px",
    fontSize: "1.5rem",
    background: "transparent",
  };

  return (
    <>
      <Banner />
      <div className="pl-2 pr-2 text-center">
        <div style={{ marginTop: "40%" }}>
          <Button style={buttonStyle} className="not-active">
            <FormattedMessage id="APP.WAITER.YOUR_WAITER_ON_HIS_WAY" />
          </Button>
          <ClockCircleOutlined
            style={{ color: "#6d9d62", marginBottom: "15px", fontSize: "30px" }}
          />
          <Button
            style={{
              ...buttonStyle,
              color: defaultColor || "#4B4B4B",
              textTransform: "uppercase",
            }}
            onClick={redirect}
          >
            <FormattedMessage id="APP.WAITER.ASK_FOR_BILL" />
          </Button>
        </div>
      </div>
    </>
  );
};
export default AskForWaiter;
