import { db } from '../firebase/index';
import { collection, addDoc, doc, setDoc, updateDoc } from "firebase/firestore";

// This is here to show the structure of our financialSettings collections
const financialSettingsStructure = {
    financialSettingsID: "sadjp92n2fvb0873bljb",
    id: "fnoi3vh30hvobtkgj21fgta",
    monthlyBudget: 1000000,
    monthlyIncome: 1000000,
    weeklyBudget: 100000,
    weeklyIncome: 100000,
    DailyBudget: 10000,
    DailyIncome: 10000,
  };

export const addFinancialSettings = async (userID, financialSettings, financialSettingsID) => {
    console.log("In addFinancial: ", { userID, financialSettings, financialSettingsID });
    try {
        if (financialSettingsID && financialSettings && userID) {
            const res = await setDoc(doc(db, 'users', userID, 'financialSettings', financialSettingsID), { ...financialSettings });
        }

        if (!financialSettingsID && userID && financialSettings) {
            const res = await addDoc(collection(db, 'users', userID, 'financialSettings'), { ...financialSettings, userID });
            const update = await updateDoc(doc(db, 'users', userID, 'financialSettings', res.id), { id: res.id });
        }
    } catch (error) {
        console.log(error);
        return { error: true, message: error };
    }
};