import { db } from '../firebase/index';
import { doc, setDoc } from "firebase/firestore";

// This is here to show the structure of our user collections
// const userStructure = {
//     firstName: 'Dylan',
//     lastName: 'Commean',
//     avatarURI: "",
//     email: "Dylan@gmail.com",
//     password: "somethingEncryptedThisWayComes",
//   };

export const addUser = async (user, userID) => {
  if (user) {
    try {
      const res = await setDoc(doc(db, 'users', userID), user);
      return { error: false };
    } catch(error) {
      return {error: true, messsage: error }
    }
  }
  console.log(`addUser failed with user: ${user}`);
  return { error: true, message: "User not created.",  };
};