import React from "react";
import styled from "styled-components";
import CollectionItems from "../collection-items/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewStyled>
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItems key={item.id} item={item} />
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
