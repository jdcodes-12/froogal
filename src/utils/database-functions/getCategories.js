import { db } from '../firebase/index';
import { collection, getDocs, query, where } from "firebase/firestore";

export const getCategories = async (userID) => {
    try {
        const categoriesSnapshot = await getDocs(query(collection(db, 'categories'), where('default', "==", true)));
        if (categoriesSnapshot.empty) {
            return [];
        }
        const categories = categoriesSnapshot.docs.map((doc) => doc.data());
        const userGeneratedCategoriesSnapshot = await getDocs(query(collection(db, 'categories'), where('userID', "==", userID)))
        if (userGeneratedCategoriesSnapshot.empty) {
            return categories;
        }
        const userCategories = userGeneratedCategoriesSnapshot.docs.map((doc) => doc.data());
        const allCategories = [...categories, ...userCategories]
        return allCategories;
    } catch (error) {
        return { error: true, message: error };
    }
};