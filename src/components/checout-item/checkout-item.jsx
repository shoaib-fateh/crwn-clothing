import React from "react";
import styled from "styled-components";

import { clearItemFromCart } from "../../features/cart/cartSlicer";

import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { imageUrl, name, quantity, price, id } = cartItem;
  return (
    <CheckoutItemStyled>
      <div className="checkout-item">
        <div className="image-container">
          <img src={imageUrl} alt={imageUrl} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={() => clearItem(id)}>
          &#10005; 
        </span>
      </div>
    </CheckoutItemStyled>
  );
};

const CheckoutItemStyled = styled.div`
  .checkout-item {
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    .image-container {
      width: 20%;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .name,
    .quantity,
    .price {
      width: 23%;
    }

    .quantity {
      padding-left: 20px;
    }

    .remove-button {
      padding-left: 12px;
      cursor: pointer;
    }
  }
`;

const mapDispatchToProps = (dispatch) => ({
  clearItem: (itemId) => dispatch(clearItemFromCart(itemId)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
