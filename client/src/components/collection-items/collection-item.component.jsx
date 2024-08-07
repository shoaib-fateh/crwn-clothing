import React from "react";
import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { addItem } from "../../features/cart/cartSlicer";

const CollectionItems = ({ item, addItem, className }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemsStyled className={className}>
      <div
        className="image"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      ></div>
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>

      <CustomButton onClick={() => addItem(item)} inverted>
        Add To Card
      </CustomButton>
    </CollectionItemsStyled>
  );
};

const CollectionItemsStyled = styled.div`
  height: 350px;
  align-items: center;
  position: relative;
  &.collectionPage {
    width: 95%;
    margin-bottom: 20px;
  }
  &.collectionPreview {
    width: 22%;
  }
  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }

  .custom-button {
    position: absolute;
    display: flex;
    justify-content: center;
    font-size: 12px;
    width: 85%;
    opacity: 0.8;
    top: 255px;
    border: none !important;
    transform: translate(9%, 0%);
    display: none;
  }

  &:hover {
    .image {
      opacity: 0.8;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItems);
