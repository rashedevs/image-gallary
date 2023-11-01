import React from "react";
import "./Image.css";
const Image = ({ filename }) => {
  return (
    <div className="product">
      {/* <img src={path + `${filename}`} alt="xyz" /> */}
      <img src={filename} alt="" />
    </div>
  );
};

export default Image;
