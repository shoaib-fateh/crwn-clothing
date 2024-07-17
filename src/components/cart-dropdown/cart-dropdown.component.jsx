import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import styled from "styled-components";

const CartDropdown = () => {
  return (
    <CartDropdownStyled className={`hidden`}>
      <div className="cart-item">
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
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

  &.hidden {
    display: none;
  }

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

export default CartDropdown;
