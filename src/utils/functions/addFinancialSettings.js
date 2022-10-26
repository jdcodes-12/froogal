import { db } from '../firebase/index';
import { collection, addDoc } from "firebase/firestore";
import { getUsers } from './getUsers';

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

export const addFinancialSettings = async (userID, financialSettings) => {
    if (userID && financialSettings) {
        const res = await collection(db, 'users', userID).addDoc(collection(db, 'financialSettings'), financialSettings);
        return res;
    }
    console.log(`addUser failed with user: ${user}`);
    return { message: "User not created." };
};