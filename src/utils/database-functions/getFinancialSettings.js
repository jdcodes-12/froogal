import { db } from '../firebase/index';
import { collection, doc, getDocs } from "firebase/firestore";
import { addFinancialSettings } from './addFinancialSettings';

const init = {
    monthlyBudget: 0,
    monthlyIncome: 0,
    weeklyBudget: 0,
    weeklyIncome: 0,
    annualBudget: 0,
    annualIncome: 0,
};

export const getFinancialSettings = async (userID) => {
    if (userID) {
        try {
            const res = await getDocs(collection(db, 'users', userID, 'financialSettings'));
            let list = [];
            res.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            if (list) {
                return ({ ...list[0] });
            }
            const addRes = await addFinancialSettings(userID, init);
            return ({ ...init, userID: userID, id: addRes.id });
        } catch (error) {
            return { error: true, message: error };
        }
    }
};