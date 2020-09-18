import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { SignIn } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
