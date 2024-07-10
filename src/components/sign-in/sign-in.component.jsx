import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import styled from "styled-components";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInStyled>
        <h2>I have Already An Account</h2>
        <p>Sign In With Email and Password.</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <label htmlFor="password">Password</label>
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <CustomButton type="submit">Submit Form</CustomButton>
          <CustomButton onClick={signInWithGoogle} type="button">
            Sign In With Google
          </CustomButton>
        </form>
      </SignInStyled>
    );
  }
}

const SignInStyled = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;

  .title {
    margin: 10px 0;
  }
`;

export default SignIn;
