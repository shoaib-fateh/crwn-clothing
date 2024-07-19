import React from "react";
import { useSelector } from "react-redux";

import { selectShopData } from "../../features/shop/shop.selector";
import CollectionItems from "../collection-items/collection-item.component";
import styled from "styled-components";

const Collection = ({ collectionId }) => {
  const collections = useSelector(selectShopData);
  let collection = collections.find(
    (collection) => collection.title.toLowerCase() === collectionId
  );

  const { title } = collection;

  return (
    <CollectionStyled>
      
      <div className="collection-page">
        <div className="title">{title}</div>
        <div className="items">
          {collection.items.map((item) => (
            <CollectionItems key={item.id} item={item} />
          ))}
        </div>
      </div>
    </CollectionStyled>
  );
};

const CollectionStyled = styled.div`
  .collection-page {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 38px;
      margin: 0 auto 30px;
    }

    .items {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;

      & .collection-item {
        margin-bottom: 30px;
      }
    }
  }
`;

export default Collection;
