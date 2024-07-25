import React from "react";
import styled from "styled-components";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...OP }) => {
  return (
    <CustomButtonStyled>
      <button
        className={`${inverted ? "inverted" : ""} ${
          isGoogleSignIn ? "google-sign-in" : ""
        } custom-button`}
        {...OP}
      >
        {children}
      </button>
    </CustomButtonStyled>
  );
};

const CustomButtonStyled = styled.div`
  .custom-button {
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: bolder;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }

    &.google-sign-in {
      background-color: #4285f4;
      color: white;
      border: none;

      &:hover {
        background-color: #357ae8;
      }
    }

    &.inverted {
      background-color: white;
      color: black;
      border: 1px solid black;
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
    }
  }
`;

export default CustomButton;
