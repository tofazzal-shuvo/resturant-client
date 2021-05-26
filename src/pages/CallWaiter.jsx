import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Banner } from "../components/Shared";

const CallWeiter = () => {
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
            Call waiter
          </Button>
          <Button style={btnStyle} onClick={askFoBill}>
            Ask for bill
          </Button>
        </div>
      </div>
    </>
  );
};
export default CallWeiter;
