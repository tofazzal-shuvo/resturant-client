import React, { useState } from "react";
// import QrReader from "react-qr-scanner";
import QrReader from "react-qr-reader";
import { useHistory } from "react-router-dom";

const Scanner = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const previewStyle = {
    height: 240,
    width: 320,
    margin: "auto",
  };
  const handleScan = (data) =>
    history.push(
      `/welcome?table=${data?.table}&restaurant=${data?.restaurant}`
    );
  const handleError = (err) => {
    console.error(err);
  };
  const redirect = () =>
    history.push(
      `/welcome?table=5f7719bcf10b4a001aaa9c13&restaurant=5f72b1281ffe10001acab3ba`
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
            {/* )} */}
            {/* {show && (
              <QrReader
                delay={300}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
              />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
