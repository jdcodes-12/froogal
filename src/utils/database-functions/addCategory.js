import { db } from '../firebase/index';
import { collection, addDoc } from "firebase/firestore";

// This is here to show the structure of our category collections
const categoryStructure = {
  name: "Rent",
  userID: "hbp9gvbp2ibpiu13g08b",
};

export const addCategory = async (category) => {
  if(category) {
    try {
      const res = await addDoc(collection(db, 'categories'), category);
    } catch(error) {
      return { error: true, message: error };
    }
  }
  return { error: true, message: "No category to submit"};
};