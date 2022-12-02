import { db } from "../firebase";
import { collection, addDoc } from 'firebase/firestore';

// This is here to show the structure of our receipt collections
const receiptStructure = {
  receiptID: 'up9hvp92lrkj3blvkug5p',
  name: 'Item Name',
  unitPrice: 4.20,
  quantity: 1,
};

export const addReceiptItems = async (receiptID, items) => {
  if (receiptID) {
    try {
      for (var element of items) {
        await addDoc(collection(db, 'receipts', receiptID, 'items'), { ...element, id: receiptID });
      }
    } catch (error) {
      console.log(error);
      return { error: true, message: error }
    }
  }
};