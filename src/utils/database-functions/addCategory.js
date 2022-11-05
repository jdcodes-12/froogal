import { db } from '../firebase/index';
import { collection, addDoc } from "firebase/firestore";

// This is here to show the structure of our quote collections
const quoteStructure = {
  name: "Rent",
  userID: "hbp9gvbp2ibpiu13g08b",
};

export const addCategory = async (category) => {
  try {
    const res = await addDoc(collection(db, 'category'), category);
  } catch(error) {
    return { error: true, message: error };
  }
};