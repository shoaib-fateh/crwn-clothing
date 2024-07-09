import React from "react";

import styled from "styled-components";

import MenuItme from "../menu-items/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          id: "1",
          title: "Hats",
          imageUrl: "http://localhost:3000/images/(82).jpg",
        },
        {
          id: "2",
          title: "Jackets",
          imageUrl: "http://localhost:3000/images/(77).jpg",
        },
        {
          id: "3",
          title: "Sneakers",
          imageUrl: "http://localhost:3000/images/(79).jpg",
        },
        {
          id: "4",
          title: "Womens",
          imageUrl: "http://localhost:3000/images/(81).jpg",
          size: "large",
        },
        {
          id: "5",
          title: "Mens",
          imageUrl: "http://localhost:3000/images/(83).jpg",
          size: "large",
        },
      ],
    };
  }

  render() {
    return (
      <DirectoryMenu>
        {this.state.section.map(({ id, title, imageUrl, size }) => (
          <MenuItme
            key={id}
            title={title.toUpperCase()}
            imageUrl={imageUrl}
            size={size}
          />
        ))}
      </DirectoryMenu>
    );
  }
}

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Directory;
