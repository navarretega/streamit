import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebaseContext";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebaseFirestore } = useContext(FirebaseContext);

  useEffect(() => {
    firebaseFirestore
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { [target]: content };
}
