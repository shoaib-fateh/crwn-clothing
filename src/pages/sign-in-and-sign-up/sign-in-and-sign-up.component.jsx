import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import styled from "styled-components";

const SignInAndSignUP = () => {
  return (
    <SignInAndSignUPStyled>
      <SignIn />
      <SignUp />
    </SignInAndSignUPStyled>
  );
};

const SignInAndSignUPStyled = styled.div`
  max-width: 950px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

export default SignInAndSignUP;
