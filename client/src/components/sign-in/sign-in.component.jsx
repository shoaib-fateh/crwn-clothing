import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import styled from "styled-components";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error.code, error.message);
      switch (error.code) {
        case "auth/user-not-found":
          alert("No account found with this email.");
          break;
        case "auth/wrong-password":
          alert("Wrong password.");
          break;
        case "auth/invalid-email":
          alert("Email address is malformed.");
          break;
        case "auth/user-disabled":
          alert("User account is disabled.");
          break;
        case "auth/too-many-requests":
          alert("Too many attempts. Please try again later.");
          break;
        default:
          alert("An unknown error occurred. Please try signing in again.");
      }
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    // this.setState({ [name]: value });
  };

  return (
    <SignInStyled>
      <h2>I Already Have An Account</h2>
      <p>Sign In With Email and Password.</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} type="button" isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </SignInStyled>
  );
};

const SignInStyled = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;

  .button {
    display: flex;
    justify-content: space-between;
  }

  .title {
    margin: 10px 0;
  }
`;

export default SignIn;
