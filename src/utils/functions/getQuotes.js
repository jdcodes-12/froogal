import { db } from '../firebase/index';
import { collection, getDocs } from "firebase/firestore";

export const getQuotes = async () => {
    const quotesSnapshot = await getDocs(collection(db, 'quotes'));
    const quotes = quotesSnapshot.docs.map((doc) => doc.data());
    return quotes;
};