import React from "react";

const Banner = ({ text, style = {} }) => {
  const {
    fontSize,
    fontFamily,
    color,
    backgroundImage,
    backgroundColor,
  } = style;

  const barStyle = {
    width: "-webkit-fill-available",
    height: "3px",
    background: color || "#fff",
    margin: "0 15px",
  };
  const textStyle = {
    fontSize: fontSize || "1.8rem",
    color: color || "#fff",
    fontFamily: fontFamily || "inherit",
    letterSpacing: "3px",
    textTransform: "uppercase",
    fontWeight: "400",
  };
  const backgroundImgStyle = {
    backgroundImage: `url(${backgroundImage || "/img/bg-banner.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const backgroundColorStyle = { backgroundColor: backgroundColor };
  const wrapperStyle = { ...backgroundImgStyle, padding: "40px 0" };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={wrapperStyle}
    >
      <div style={barStyle}></div>
      <h3 style={textStyle}>{text}</h3>
      <div style={barStyle}></div>
    </div>
  );
};

export default Banner;
