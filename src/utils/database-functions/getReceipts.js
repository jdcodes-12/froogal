import { db } from '../firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { getReceiptItems } from './getReceiptItems';

const getReceiptTags = async (receiptID) => {
  if (receiptID) {
    try {
      const data = await getDocs(collection(db, 'receipts', receiptID, 'tags'));
      return data.docs.map((doc) => doc.data());
    } catch (error) {
      console.log(error);
      return { error: true, message: error };
    }
  }
};

export const getReceipts = async (userID) => {
  try {
    const receiptQuery = query(collection(db, 'receipts'), orderBy('date', 'desc'), where('userID', '==', userID));
    const receipts = await getDocs(receiptQuery);
    const data = receipts.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    for (var element of data) {
      const items = await getReceiptItems(element.id);
      const tags = await getReceiptTags(element.id);
      element.items = items;
      element.tags = tags;
    }
    return data ?? [];
  } catch (error) {
    return { error: true, message: error };
  }
};