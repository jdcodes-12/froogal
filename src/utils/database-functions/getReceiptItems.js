import { db } from "../firebase";
import { collection, getDocs } from 'firebase/firestore';

export const getReceiptItems = async (receiptID) => {
  try {
    const data = await getDocs(collection(db, 'receipts', receiptID, 'items'));
    return data.docs.map((doc) => doc.data());
  } catch (error) {
    console.log(error);
    return { error: true, message: error };
  }
};