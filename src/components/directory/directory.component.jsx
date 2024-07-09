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
          url: "hats",
        },
        {
          id: "2",
          title: "Jackets",
          imageUrl: "http://localhost:3000/images/(77).jpg",
          url: "jackets",
        },
        {
          id: "3",
          title: "Sneakers",
          imageUrl: "http://localhost:3000/images/(79).jpg",
          url: "sneakers",
        },
        {
          id: "4",
          title: "Womens",
          imageUrl: "http://localhost:3000/images/(81).jpg",
          size: "large",
          url: "womens",
        },
        {
          id: "5",
          title: "Mens",
          imageUrl: "http://localhost:3000/images/(83).jpg",
          size: "large",
          url: "mens",
        },
      ],
    };
  }
  
  // OSP - Other Section Props
  render() {
    return (
      <DirectoryMenu>
        {this.state.section.map(({ id, ...OSP }) => (
          <MenuItme key={id} {...OSP} />
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
