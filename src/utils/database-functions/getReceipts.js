import { db } from '../firebase';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';

export const getReceipts = async (userID) => {
    const receiptQuery = query(collection(db, 'receipts'), where('userID', '==', userID));
    const data = await getDocs(receiptQuery);
    const dataList = data.docs.map((doc) => doc.data());
    return dataList ?? [];
};