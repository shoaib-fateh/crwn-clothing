import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotalPrice,
} from "../../features/cart/cart.selectors";
import CheckoutItem from "../../components/checout-item/checkout-item";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

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
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>

      <StripeCheckoutButton price={totalPrice} disabled={navigator.onLine} />
    </div>
  </CheckoutPageStyled>
);

const CheckoutPageStyled = styled.div`
  .checkout-page {
    text-align: center;
    width: 55%;
    min-height: 90vh;
    display: flex;
    margin: 50px auto 0;
    flex-direction: column;

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
      margin-bottom: 20px;
      font-size: 36px;
    }
  }
`;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
