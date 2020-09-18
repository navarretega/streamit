import React, { useState } from "react";

import { Header, Form } from "../components";
import logo from "../assets/logo.png";

function SignIn() {
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleSignin = (event) => {};

  return (
    <>
      <Header.Frame>
        <Header.Logo to="/" src={logo} alt="Netflix" />
        <Header.ButtonLink to="/signin">Sign in</Header.ButtonLink>
      </Header.Frame>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={handleSignin} method="POST">
          <Form.Input placeholder="Email Address" value={emailAddress} onChange={({ target }) => setEmailAddress(target.value)} />
          <Form.Input
            placeholder="Password"
            type="password"
            autoComplete="off"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Submit disabled={isInvalid} type="submit">
            Sign in
          </Form.Submit>
          <Form.Text>
            New to Streamit? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
        </Form.Base>
      </Form>
    </>
  );
}

export default SignIn;
