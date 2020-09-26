import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { Header, Form } from "../components";
import logo from "../assets/misc/logo.png";
import { FirebaseContext } from "../context/firebaseContext";

function SignUp() {
  const history = useHistory();
  const { firebaseAuth } = useContext(FirebaseContext);

  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignUp = (event) => {
    event.preventDefault();

    firebaseAuth
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push("/");
          });
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <Header.Frame>
        <Header.Logo to="/" src={logo} alt="Netflix" />
        <Header.ButtonLink to="/signin">Sign in</Header.ButtonLink>
      </Header.Frame>
      <Form>
        <Form.Title>Sign Up</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={handleSignUp} method="POST">
          <Form.Input placeholder="First Name" value={firstName} onChange={({ target }) => setFirstName(target.value)} />
          <Form.Input placeholder="Email Address" value={emailAddress} onChange={({ target }) => setEmailAddress(target.value)} />
          <Form.Input
            placeholder="Password"
            type="password"
            autoComplete="off"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Submit disabled={isInvalid} type="submit">
            Sign up
          </Form.Submit>
          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in instead.</Form.Link>
          </Form.Text>
        </Form.Base>
      </Form>
    </>
  );
}

export default SignUp;
