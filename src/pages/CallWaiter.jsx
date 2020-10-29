import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const CallWeiter = () => {
  const history = useHistory();

  const waiterCall = () => history.push("/ask-for-waiter");
  const askFoBill = () => history.push("/ask-for-bill");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="/img/logo.png" alt="logo" className="img-fluid mt-5 mb-5" />
          <div className="mt-5">
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
      </div>
    </div>
  );
};
export default CallWeiter;

const btnStyle = {
  border: "none",
  paddingLeft: 0,
  paddingRight: 0,
  display: "block",
  margin: "auto",
  fontSize: "1.5rem",
};