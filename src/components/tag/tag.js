import React from "react";
import tagCSS from "./tag.module.css";
import Radium from "radium";

const Tag = props => {
  const UserStyles = {
    ":hover": {
      backgroundColor: props.bgColor,
      color: props.color,
      fontFamily: props.fontFamily
    }
  };
  return (
    <div className={tagCSS.tag}>
      <a href="#" className={tagCSS.atext} style={UserStyles}>
        {props.children}
      </a>
    </div>
  );
};
export default Radium(Tag);
