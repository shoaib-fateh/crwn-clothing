import React from "react";
import styled from "styled-components";

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
    </CollectionItemsStyled>
  );
};

const CollectionItemsStyled = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

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
`;

export default CollectionItems;
