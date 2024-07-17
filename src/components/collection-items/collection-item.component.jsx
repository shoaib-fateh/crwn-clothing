import React from "react";
import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItems = ({ imageUrl, name, price }) => {
  return (
    <CollectionItemsStyled>
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

      <CustomButton inverted>Add To Card</CustomButton>
    </CollectionItemsStyled>
  );
};

const CollectionItemsStyled = styled.div`
  width: 22%;
  height: 350px;
  align-items: center;
  position: relative;

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
      opacity: 0.8
    }

    .custom-button {
      opacity: 0.85;
      display: flex
    }
  }
`;

export default CollectionItems;
