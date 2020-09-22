import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { SignIn, SignUp, Home } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./utils/routes";
import { useAuthListener } from "./hooks";

function App() {
  const { user } = useAuthListener();
  return (
    <BrowserRouter>
      <Switch>
        <IsUserRedirect user={user} loggedInPath="/" path="/signin">
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath="/" path="/signup">
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path="/">
          <Home />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
