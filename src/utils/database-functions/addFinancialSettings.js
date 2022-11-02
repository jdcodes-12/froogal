import { db } from '../firebase/index';
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

// This is here to show the structure of our user collections
// const financialSettings = {
//     financialSettingsID: "sadjp92n-vb0873bljb";
//     monthlyBudget: 1000000,
//     monthlyIncome: 1000000,
//     weeklyBudget: 100000,
//     weeklyIncome: 100000,
//     DailyBudget: 10000,
//     DailyIncome: 10000,
//   };

export const addFinancialSettings = async (userID, financialSettings, financialSettingsID = null) => {
    try {
        if (financialSettingsID && financialSettings && userID) {
            const res = await setDoc(doc(db, 'users', userID, 'financialSettings', financialSettingsID), { ...financialSettings });
        }

        if (!financialSettingsID && userID && financialSettings) {
            const res = await addDoc(collection(db, 'users', userID, 'financialSettings'), { ...financialSettings, userID });
        }
    } catch (error) {
        console.log(error);
        return { error: true, message: error };
    }
};