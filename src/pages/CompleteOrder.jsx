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

  const redirect = () => history.push("/ask-for-waiter");
  const redirectToOrder = () => history.push("/menu");

  const buttonStyle = {
    border: "none",
    paddingLeft: 0,
    paddingRight: 0,
    display: "block",
    margin: "auto",
    marginBottom: "30px",
    fontSize: "1.5rem",
    color: defaultColor,
    background: "transparent",
  };

  return (
    <>
      <Banner text="Order placed" />

      <div className="text-center pl-2 pr-2">
        <div className="mt-5">
          <Button
            style={{
              ...buttonStyle,
              color: defaultColor || "#656464",
              height: "auto",
            }}
          >
            Thank you!
            <br />
            Your order has been placed.
          </Button>
          <Button style={buttonStyle} onClick={redirectToOrder}>
            New order
          </Button>
          <Button style={buttonStyle} onClick={redirect}>
            Call waiter
          </Button>
        </div>
      </div>
    </>
  );
};

export default CallWeiter;
