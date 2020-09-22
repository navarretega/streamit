import React, { useContext } from "react";

import { FirebaseContext } from "../context/firebaseContext";

function Home() {
  const { firebaseAuth } = useContext(FirebaseContext);

  return (
    <>
      <div style={{ color: "white" }}>Home</div>
      <button onClick={() => firebaseAuth.signOut()}>Sign Out</button>
    </>
  );
}

export default Home;
