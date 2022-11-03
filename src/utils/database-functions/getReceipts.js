import { db } from '../firebase';
import { collection, query, where } from 'firebase/firestore';

export const getReceipts = async (userID) => {
    const receiptQuery = query(collection(db, 'receipts'), where('userID', '==', userID));
    console.log(receiptQuery.docs);
    return receiptQuery.docs ?? [];
};