import { db } from '../firebase/index';
import { doc, getDoc } from "firebase/firestore";

export const getUserData = async (userID) => {
    if(userID) {
        try {
            const res = await getDoc(doc(db, 'users', userID));
            if (res.exists()) {
                return res.data();
            } else {
                return { error: true, message: "User ID does not exist"};
            }
        } catch (error) {
            return { error: true, message: error };
        }
    }
}