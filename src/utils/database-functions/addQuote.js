import { db } from '../firebase/index'; 
import { collection, addDoc } from "firebase/firestore"; 

// This is here to show the structure of our quote collections
const quoteStructure = {
  quote: "If it ain't broke, don't fix it",
  author: "Anonymous",
};

export const addQuote = async (quote) => {
  try {
    const res = await addDoc(collection(db, 'quotes'), quote);
  } catch (error) {
    return { error: true, message: error}
  }
};