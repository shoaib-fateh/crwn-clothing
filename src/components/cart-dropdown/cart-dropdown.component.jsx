import React from "react";

import CartItem from "../cart-item/cart-item";

import CustomButton from "../custom-button/custom-button.component";
import styled from "styled-components";

import { connect } from "react-redux";
import { selectCartItems } from "../../features/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => {
  return (
    <CartDropdownStyled>
      <div className="cart-items">
        {cartItems.map((cartItems) => (
          <CartItem id={cartItems.id} item={cartItems} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </CartDropdownStyled>
  );
};

const CartDropdownStyled = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  button {
    margin-top: auto;
    font-size: 13px !important;
  }
`;

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
