import React from "react";

import CartItem from "../cart-item/cart-item";

import CustomButton from "../custom-button/custom-button.component";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { selectCartItems } from "../../features/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartDropdown = ({ cartItems }) => {
  const navigate = useNavigate();
  return (
    <CartDropdownStyled>
      <div className="cart-items">
        {cartItems.length ? (
          (() =>
            cartItems.map((cartItems) => (
              <CartItem id={cartItems.id} item={cartItems} />
            )))()
        ) : (
          <span className="empty-message">Your Cart is Empty.</span>
        )}
      </div>
      <CustomButton onClick={() => navigate("/checkout")}>
        GO TO CHECKOUT
      </CustomButton>
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

    .empty-message {
      font-size: 18;
      margin: 15px auto;
    }
  }

  button {
    margin-top: auto;
    font-size: 13px !important;
  }
`;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
