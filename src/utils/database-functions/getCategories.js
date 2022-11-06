import { db } from '../firebase/index';
import { collection, getDocs } from "firebase/firestore";

export const getCategories = async (userID) => {
    try {
        const categoriesSnapshot = await getDocs(collection(db, 'categories'));
        const categories = categoriesSnapshot.docs.map((doc) => doc.data());
        return categories;
    } catch (error) {
        return { error: true, message: error };
    }
};