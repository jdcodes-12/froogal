import { db } from '../firebase/index'; 
import { collection, addDoc } from "firebase/firestore"; 

// This is here to show the structure of our user collections
const quoteStructure = {
    quote: "If it ain't broke, don't fix it",
    author: "Anonymous",
  };

export const addQuote = async (quote) => {
    if(quote) {
      const { quote, author = "Anonymous"} = quote;
      const res = await addDoc(collection(db, 'quotes'), { quote, author });
    } else {
      console.log(`addQuote failed with quote: ${quote}`);
      return { message: "Quote was not added." };
    }
};