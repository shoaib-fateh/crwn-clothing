import React from "react";

import "./menu-item.styles.scss";

const MenuItme = ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      ></div>
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="subtitle">SHOP NOW</p>
      </div>
    </div>
  );
};

export default MenuItme;
