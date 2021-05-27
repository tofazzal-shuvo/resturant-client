import { Button } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Banner } from "../components/Shared";

const CallWAITER = () => {
  const history = useHistory();
  const defaultColor = useSelector(
    (state) => state?.info?.resTemplate?.general?.defaultColor || ""
  );
  const waiterCall = () => history.push("/ask-for-waiter");
  const askFoBill = () => history.push("/ask-for-bill");

  const btnStyle = {
    border: "none",
    color: defaultColor,
    paddingLeft: 0,
    paddingRight: 0,
    display: "block",
    margin: "auto",
    fontSize: "1.5rem",
    background: "transparent",
    textTransform: "uppercase",
  };

  return (
    <>
      <Banner />
      <div className="text-center pl-2 pr-2">
        <div style={{ marginTop: "45%" }}>
          <Button
            style={{ ...btnStyle, marginBottom: "30px" }}
            onClick={waiterCall}
          >
            <FormattedMessage id="APP.WAITER.CALL_WAITER" />
          </Button>
          <Button style={btnStyle} onClick={askFoBill}>
            <FormattedMessage id="APP.WAITER.ASK_FOR_BILL" />
          </Button>
        </div>
      </div>
    </>
  );
};
export default CallWAITER;
