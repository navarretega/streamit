import { useState, useEffect, useContext } from "react";

import { FirebaseContext } from "../context/firebaseContext";

function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));
  const { firebaseAuth } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebaseAuth.onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }

      return () => listener();
    });
  }, [firebaseAuth]);

  return { user };
}

export default useAuthListener;
