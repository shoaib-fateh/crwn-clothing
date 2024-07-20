import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";

import CartIcon from "../shopping-icon/shopping-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectHidden } from "../../features/cart/cart.selectors";
import { selectCurrentUser } from "../../features/user/user.selectors";
import { createStructuredSelector } from "reselect";

import {
  HeaderStyled,
  LogoContainerStyled,
  OptionsContainerStyled,
  OptionContainerStyled,
} from "./header.styled";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderStyled>
      <LogoContainerStyled to="/">
        <Logo className="logo" />
      </LogoContainerStyled>
      <OptionsContainerStyled>
        <OptionContainerStyled to="/shop">SHOP</OptionContainerStyled>
        {currentUser ? (
          <OptionContainerStyled onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionContainerStyled>
        ) : (
          <OptionContainerStyled to="/signin">SIGN IN</OptionContainerStyled>
        )}

        <CartIcon />
      </OptionsContainerStyled>

      {hidden ? null : <CartDropdown />}
    </HeaderStyled>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});

export default connect(mapStateToProps)(Header);
