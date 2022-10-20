import { db } from '../firebase/index'; 
import { collection, addDoc } from "firebase/firestore"; 

// This is here to show the structure of our user collections
const userStructure = {
    first: 'Dylan',
    last: 'Commean',
    avatarURI: "",
    email: "Dylan@gmail.com",
    password: "somethingEncryptedThisWayComes",
    receipts: {},
    expenses: {},
    financialSettings: {},
  };

export const addUser = async (user) => {
    if(user) {
      const newUser = {...userStructure, ...user};
      await addDoc(collection(db, 'users'), newUser);
    } else {
      console.log(`addUser failed with user: ${user}`);
    }
};