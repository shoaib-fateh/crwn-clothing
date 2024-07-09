import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, url, match }) => {
  return (
    <MenuItemContainer
      size={size}
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >

      <div className="background-image" />
      <div className="content">
        <Link to={`/${url}`} >
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
        </Link>
      </div>
    </MenuItemContainer>
  );
};

const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? "380px" : "240px")};
  min-width: 30%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background-position: center;
  background-size: cover;
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    .title {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }
`;

export default MenuItem;
