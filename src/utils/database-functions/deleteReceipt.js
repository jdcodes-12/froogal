import { db } from '../firebase/index';
import { doc, deleteDoc } from "firebase/firestore";

export const deleteReceipt = async (receiptId) => {
  try {
    const receiptRef = doc(db, "receipts", receiptId);
    await deleteDoc(receiptRef);
  } catch (error) {
    return { error: true, message: error };
  }
};
