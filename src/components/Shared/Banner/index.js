import React from "react";
import { useSelector } from "react-redux";
import { getImage } from "../../../util";

const Banner = ({ text, menuImageLink }) => {
  const {
    title,
    headerSelected,
    fontSize,
    fontFamily,
    color,
    backgroundPattern,
    backgroundColor,
    backgroundSelected,
  } = useSelector((state) => state?.info?.resTemplate?.header || {});
  const logo =
    useSelector((state) => state?.info?.resInfo?.logo) || "/img/logo.png";

  const barStyle = {
    width: "-webkit-fill-available",
    minWidth: "10px",
    height: "3px",
    background: color || "#fff",
    margin: "0 3%",
  };
  const textStyle = {
    fontSize: fontSize || "1.8rem",
    color: color || "#fff",
    fontFamily: fontFamily || "inherit",
    letterSpacing: "3px",
    textTransform: "uppercase",
    fontWeight: "400",
    whiteSpace: "nowrap",
  };
  const backgroundImgStyle = {
    backgroundImage: `url(${
      menuImageLink
        ? getImage(menuImageLink)
        : backgroundPattern || "/img/bg-banner.jpg"
    })`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  };

  const wrapperStyle = menuImageLink
    ? {
        ...backgroundImgStyle,
        backgroundSize: "cover",
        padding: "40px 0",
      }
    : backgroundSelected === "pattern"
    ? { ...backgroundImgStyle, padding: "40px 0" }
    : { backgroundColor, padding: "40px 0" };

  const textPortion = (
    <>
      <div style={barStyle}></div>
      <h3 style={textStyle}>{text || title}</h3>
      <div style={barStyle}></div>
    </>
  );
  const imgStyle = {
    maxWidth: "60%",
    display: "inline-block",
    margin: "auto",
    objectFit: "contain",
    maxHeight: "13vh",
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={wrapperStyle}
    >
      {text ? (
        textPortion
      ) : headerSelected === "logo" ? (
        <img
          src={getImage(logo)}
          alt="restaurants logo"
          style={imgStyle}
        />
      ) : (
        textPortion
      )}
    </div>
  );
};

export default Banner;
