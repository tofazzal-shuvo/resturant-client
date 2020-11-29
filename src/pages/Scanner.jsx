import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Scanner = () => {
  const location = useLocation();
  const history = useHistory();

  const query = new URLSearchParams(location.search);
  const restaurantId = query.get("restaurant");
  const tableId = query.get("table");

  const previewStyle = {
    height: 240,
    width: 320,
    margin: "auto",
  };
  const redirect = () =>
    history.push(
      `/welcome?table=${tableId}&restaurant=${restaurantId}`
    );
  return (
    <div className="container qrCode">
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="/img/logo.png" alt="logo" className="img-fluid mt-5 mb-5" />
          <h2 className="mb-5">Scan to see menu :)</h2>
          <div className="scanner-wrapper">
            {/* {!show && ( */}
            <img
              src="/img/custom-scanner.png"
              className="img-fluid"
              onClick={redirect}
              // onClick={() => setShow(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
