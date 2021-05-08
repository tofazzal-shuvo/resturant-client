import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { Banner } from "../components/Shared";

const CallWeiter = () => {
  const history = useHistory();
  const redirect = () => history.push("/ask-for-waiter");
  const redirectToOrder = () => history.push("/menu");

  return (
    <>
      <Banner text="Order placed" />

      <div className="text-center pl-2 pr-2">
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
              color: "#656464",
              height: "auto",
            }}
          >
            Thank you!
            <br />
            Your order has been placed.
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
          {/* <Button
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
        </Button> */}
        </div>
      </div>
    </>
  );
};

export default CallWeiter;
