import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { useHistory } from "react-router-dom";

const Scanner = () => {
  const [tableId, setTableId] = useState("");
  const [show, setShow] = useState(false);
  const history = useHistory()
  const previewStyle = {
    height: 240,
    width: 320,
    margin: "auto",
  };
  const handleScan = (data) => {
    setShow(true);
    setTableId(data);
    history.push('/welcome')
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="container qrCode">
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="/img/logo.png" alt="logo" className="img-fluid mt-5 mb-5" />
          <h2 className="mb-5">Scan to see menu :)</h2>
          <div className="scanner-wrapper">
            {!show && (
              <img
                src="/img/custom-scanner.png"
                className="img-fluid"
                onClick={() => setShow(true)}
              />
            )}
            {show && (
              <QrReader
                // delay={this.state.delay}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
