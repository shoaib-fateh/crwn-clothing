import React from "react";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo-container">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
      </div>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .option {
      padding: 10px 15px;
    }
  }
`;

export default Header;
