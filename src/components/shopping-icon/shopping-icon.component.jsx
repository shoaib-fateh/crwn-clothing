import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../features/cart/cartSlicer";

const CartIcon = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <ShoppingIconStyled onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </ShoppingIconStyled>
  );
};

const ShoppingIconStyled = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 24px;
    height: 24px;
  }

  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
`;

export default CartIcon;