import { db } from '../firebase/index';
import { collection, addDoc } from "firebase/firestore";

// This is here to show the structure of our user collections
// const quoteStructure = {
//   quote: "If it ain't broke, don't fix it",
//   author: "Anonymous",
// };

export const addCategory = async (category) => {
  if (category) {
    const { name } = category;
    const res = await addDoc(collection(db, 'category'), name);
    return res;
  } else {
    console.log(`addCategory failed with category: ${category}`);
    return { message: "Category was not created." };
  }
};