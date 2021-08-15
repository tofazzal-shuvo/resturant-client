import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getImage } from "../../../util";

const Banner = ({ text, menuImageLink, showBookIcon = false, type }) => {
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
  const history = useHistory();
  const onClickMenuIcon = () => history.push("/menu");
  const barStyle = {
    width: "-webkit-fill-available",
    minWidth: "10px",
    height: "3px",
    background: color || "#fff",
    margin: "0 3%",
  };

  useEffect(() => {
    window.WebFont.load({
      google: { families: [fontFamily] },
    });
  }, [fontFamily]);
  const textStyle = {
    fontSize: fontSize || "1.8rem",
    color: color || "#fff",
    fontFamily: type === "lan" ? fontFamily : "inherit",
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
      style={{ ...wrapperStyle, position: "relative" }}
    >
      {showBookIcon && (
        <i
          onClick={onClickMenuIcon}
          className="fas fa-book-open"
          style={{
            position: "absolute",
            top: "10px",
            left: "45px",
            fontSize: "20px",
            color,
          }}
        ></i>
      )}
      {text ? (
        textPortion
      ) : headerSelected === "logo" ? (
        <img src={getImage(logo)} alt="restaurants logo" style={imgStyle} />
      ) : (
        textPortion
      )}
    </div>
  );
};

export default Banner;
