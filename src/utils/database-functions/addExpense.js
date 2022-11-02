import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const addExpense = (expense) => {
    try {
        const res = addDoc(collection(db, 'expenses'), expense);
    } catch (error) {
        return { error: true, message: error }
    }
}