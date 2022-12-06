import { db } from '../firebase/index';
import { getDocs, query, collection, where } from "firebase/firestore";

export const getUserPassword = async (email) => {
    if (email) {
        try {
            const res = await getDocs(query(collection(db, 'users'), where('email', '==', email)));
            if (res.empty) {
                return { error: true, message: "User email does not exist" };
            } else {
                return res.docs.map((doc) => doc.data());
            }
        } catch (error) {
            return { error: true, message: error };
        }
    }
}