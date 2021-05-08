import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../Shared";

const NoOrder = () => {
  return (
    <div className="text-center">
      <Banner text="No Order" />
      <h3
        style={{
          color: "#656464",
          fontWeight: "400",
          fontSize: "28px",
          marginTop: "2.5em",
          lineHeight: "1.5",
        }}
      >
        It looks like you have not orderd.
        <br />
        <Link
          to="/menu"
          style={{
            color: "#656464",
          }}
        >
          Click here to go to the main menu
        </Link>
      </h3>
      <i
        class="fas fa-utensils"
        aria-hidden="true"
        style={{ color: "#707070", marginTop: ".5em", fontSize: "6em" }}
      ></i>
    </div>
  );
};

export default NoOrder;
