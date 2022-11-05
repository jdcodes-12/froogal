import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

// This is here to show the structure of our user collections
const expenseStructure = {
    dueDate: "September 20, 2022 00:00:00",
    locationName: "Amazon",
    price: 19.99,
    isPaid: true,
    isActive: false,
    userID: "bcp8ygb0g28blbvsdb7832"
};

export const addExpense = (expense) => {
    try {
        const res = addDoc(collection(db, 'expenses'), expense);
    } catch (error) {
        return { error: true, message: error }
    }
}