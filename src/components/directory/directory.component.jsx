import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import MenuItme from "../menu-items/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { directoryReducer } from "../../features/directory/directorySlicer";
import { selectDirectorySections } from "../../features/directory/directory.selector";

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <DirectoryMenu>
      {sections.map(({ id, ...props }) => (
        <MenuItme key={id} {...props} />
      ))}
    </DirectoryMenu>
  );
};

export default Directory;
