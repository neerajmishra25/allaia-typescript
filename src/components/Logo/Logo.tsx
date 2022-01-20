import React from "react";
import LogoImg from "../../img/logo.svg";
import LogoBlackImg from "../../img/logo_black.svg";
import "./Logo.scss";

interface LogoProps {
  color?: "black";
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ color, width, height }) => {
  const logoImg = color === "black" ? LogoBlackImg : LogoImg;
  return (
    <img
      src={logoImg}
      width={width}
      height={height}
      className="brand-img"
      alt="Allaia"
    />
  );
};

export default Logo;
