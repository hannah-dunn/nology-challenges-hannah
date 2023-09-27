import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

export const getAllMovies = async () => {
  // create collection reference
  const collectionRef = collection(db, "movies");
  // get all documents based on that reference
  const querySnapshot = await getDocs(collectionRef);
  // tidy data
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getMovieById = async (id) => {
  // get doucment reference
  const docRef = doc(db, "movies", id);
  const querySnapshot = await getDoc(docRef);
  if (!querySnapshot.exists()) {
    throw new Error("Document not found");
  }
  return { id: querySnapshot.id, ...querySnapshot.data() };
};

export const createMovie = async (data) => {
  try {
    const collectionRef = collection(db, "movies");
    const newMovieRef = await addDoc(collectionRef, data);
    return newMovieRef;
  } catch (e) {
    // if i need to i can log etc here
    console.log(e);
    throw e;
  }
};
