import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { FirebaseContext } from "./context/firebaseContext";
import { firebaseAuth, firebaseStorage, firebaseFirestore } from "./utils/firebaseSetup";

const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        background-color: #0f0e17;
        margin: 0;
    }
`;

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebaseAuth, firebaseStorage, firebaseFirestore }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
