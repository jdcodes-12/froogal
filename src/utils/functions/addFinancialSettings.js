import { db } from '../firebase/index';
import { collection, addDoc, getDoc, updateDoc, getDocs } from "firebase/firestore";

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
        const financialSnapshot = getDoc(collection(db, 'users', userID, 'financialSettings'));
        if (financialSnapshot.exists()) {
            updateDoc(financialSnapshot, {
                ...financialSettings
            })
            return { message: `Financial Settings were found and updated for userID: ${userID}`};
        } 
    }

    if (userID && financialSettings) {
        await addDoc(collection(db, 'users', userID, 'financialSettings'),  { ...financialSettings, userID: userID});
        return { message: `Financial Settings set for userID: ${userID}`};
    }
    console.log(`addFinanceSettings failed with: ${userID}`);
    return { message: "User not created." };
};