import { db } from "../firebase";
import { collection, addDoc } from 'firebase/firestore';

// This is here to show the structure of our receipt collections
const tagsStructure = {
  receiptID: 'up9hvp92lrkj3blvkug5p',
  name: 'Rent',
};

export const addReceiptTags = async (receiptID, tags) => { 
  if(receiptID) {
    try {
      for(var element of tags) {
        await addDoc(collection(db, 'receipts', receiptID, 'tags'), { ...element, id: receiptID });
      }
    } catch (error) {
      console.log(error);
      return { error: true, message: error }
    }
  }
};