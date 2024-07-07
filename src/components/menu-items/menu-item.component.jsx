import React from "react";

import "./menu-item.styles.scss";

const MenuItme = ({ title, imageUrl, size }) => {
  return (
    <div
      style={{
        backgroundImage: `url("${imageUrl}")`,
      }}
      className={`menu-item ${size}`}
    >
      <div className="content">
        {/* <img src={imageUrl} /> */}
        <h2 className="title">{title}</h2>
        <p className="subtitle">SHOP NOW</p>
      </div>
    </div>
  );
};

export default MenuItme;
