import { db } from '../firebase/index';
import { addDoc, collection } from 'firebase/firestore';
import { addReceiptItems } from './addReceiptItems';
import { addReceiptTags } from './addReceiptTags';

// This is here to show the structure of our receipt collections
const receiptStructure = {
    userID: 'up9hvp92lrkj3blvkug5p',
    name: 'Receipt 1',
    locationName: 'Target',
    totalItems: 2,
    tags: [{ name: "Food" }, { name: "Entertainment" }],
    totalPrice: 34.74,
    date: new Date().getDate(),
    items: [{
        name: "Earbuds",
        quantity: 1,
        unitPrice: 24.99,
    }, {
        name: "Phone Charger",
        quantity: 1,
        unitPrice: 9.75
    }],
};

export const addReceipt = async (userID, receipt) => {
    const items = receipt?.items ?? [];
    delete receipt.items;
    const tags = receipt?.tags ?? [];
    delete receipt.tags;
    if (userID) {
        try {
            const res = await addDoc(collection(db, 'receipts'), {
                ...receipt,
                userID: userID,
            });
            const itemRes = await addReceiptItems(res.id, items);
            const tagRes = await addReceiptTags(res.id, tags);
            return { error: false, id: res.id };
        } catch (error) {
            return { error: true, message: error };
        }
    }
};