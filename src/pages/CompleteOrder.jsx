import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const CallWeiter = () => {
  const history = useHistory();
  const redirect = () => history.push("/ask-for-waiter");
  const redirectToOrder = () => history.push("/menu-items");

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
                color:"#6d9d62"
              }}
            >
              Thank you
            </Button>
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
              onClick={redirectToOrder}
            >
              New order
            </Button>
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
              onClick={redirect}
            >
              Call waiter
            </Button>
            <Button
              style={{
                border: "none",
                paddingLeft: 0,
                paddingRight: 0,
                display: "block",
                margin: "auto",
                fontSize: "1.5rem",
              }}
              onClick={redirect}
            >
              Ask for bill
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallWeiter;
