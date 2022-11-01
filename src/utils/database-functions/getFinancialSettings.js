import { db } from '../firebase/index';
import { collection, doc, getDocs } from "firebase/firestore";
import { addFinancialSettings } from './addFinancialSettings';
import { domMax } from 'framer-motion';

export const getFinancialSettings = async (userID) => {
    const init = {
        id: "",
        userID: "",
        monthlyBudget: 0,
        monthlyIncome: 0,
        weeklyBudget: 0,
        weeklyIncome: 0,
        annualBudget: 0,
        annualIncome: 0,
    }
    if (userID) {
        try {
            const res = await getDocs(collection(db, 'users', userID, 'financialSettings'));
            let list = [];
            res.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            if (list) {
                return ({ ...list[0] });
            } else {
                const res = await addFinancialSettings(userID, init);
                return ({ ...init, userID: userID, id: res.id });
            }
        } catch (error) {
            console.log(error);
            return { error: true, message: error };
        }
    }
}