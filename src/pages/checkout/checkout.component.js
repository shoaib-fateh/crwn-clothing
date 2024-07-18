import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotalPrice,
} from "../../features/cart/cart.selectors";
import CheckoutItem from "../../components/checout-item/checkout-item";

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <CheckoutPageStyled>
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem id={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  </CheckoutPageStyled>
);

const CheckoutPageStyled = styled.div`
  .checkout-page {
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    .checkout-header {
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid darkgrey;

      .header-block {
        text-transform: capitalize;
        width: 23%;

        &:last-child {
          width: 8%;
        }
      }
    }

    .total {
      margin-top: 30px;
      margin-left: auto;
      font-size: 36px;
    }
  }
`;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
