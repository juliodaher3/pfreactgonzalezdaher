import React from "react";
import "./Header.css";
import img from "./logo.png";

const Header = (props) => {
  // console.log(props);
  return (
    <div className="Header">
      <img src={img} alt="logo chinpokomon" />
      <h1>{props.title}</h1>
      
      <h2>{props.subTitle}</h2>
    </div>
  );
};

export default Header;
