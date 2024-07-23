import React from "react";
import styled from "styled-components";
import CollectionItems from "../collection-items/collection-item.component";
import { Link } from "react-router-dom";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewStyled>
      <Link to={`/shop/${title.toLowerCase()}`} className="title">
        {title.toUpperCase()}
      </Link>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItems
              key={item.id}
              item={item}
              className="collectionPreview"
            />
          ))}
      </div>
    </CollectionPreviewStyled>
  );
};

const CollectionPreviewStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .preview {
    display: flex;
    justify-content: space-between;
  }
`;

export default CollectionPreview;
