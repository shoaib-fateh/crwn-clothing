import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import styled from "styled-components";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.createUserWithEmailAndPassword(email, password);

      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
    // this.setState({ email: "", password: "" });
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
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <div className="button">
            <CustomButton type="submit">Submit Form</CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              type="button"
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </SignInStyled>
    );
  }
}

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
