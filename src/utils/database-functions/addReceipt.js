import { db } from '../firebase/index';
import { addDoc, collection } from 'firebase/firestore';

// This is here to show the structure of our receipt collections
// const receiptStructure = {
//     userID: 'up9hvp92lrkj3blvkup',
//     name: 'Receipt 1',
//     locationName: 'Target,
//     totalItems: 2,
//     Categories: [{ name: "Food" }, { name: "Entertainment" }],
//     totalPrice: 34.74,
//     date: new Date().getDate(),
//     items: [{
//         name: "Earbuds",
//         quantity: 1,
//         unitPrice: 24.99,
//     }, {
//         name: "Phone Charger",
//         quantity: 1,
//         unitPrice: 9.75
//     }],
//   };

export const addReceipt = async (receipt, userID) => {
    if (userID) {
        try {
            const res = addDoc(collection(db, 'receipts'), { ...receipt, userID: userID });
        } catch (error) {
            return { error: true, message: error };
        }
    }
};