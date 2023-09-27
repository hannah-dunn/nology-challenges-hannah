import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

export const testDatabase = async () => {
  const collectionRef = collection(db, "test-collection");
  const snapshot = await getDocs(collectionRef);
  const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(documents);
  //   snapshot.docs.forEach((doc) => console.log(doc.id, doc.data()));
};
