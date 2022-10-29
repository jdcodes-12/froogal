import { db } from '../firebase/index';
import { collection, getDocs } from "firebase/firestore";

export const getUsers = async () => {
    const usersSnapshot = await getDocs(collection(db, 'users'));
    const users = usersSnapshot.docs.map((doc) => doc.data());
    return Promise.resolve(users);
};