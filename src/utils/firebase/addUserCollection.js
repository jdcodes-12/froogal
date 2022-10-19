import { AuthErrorCodes } from "firebase/auth";
import database from "../firebase"
const docRef = database.collection('users');

// This is here to show the structure of our user collections
const userStructure = {
    first: 'Dylan',
    last: 'Commean',
    avatarURI: "",
    email: "Dylan@gmail.com",
    password: "somethingEncryptedThisWayComes"
  };

const addUserToCollection = async (user) => {
    if(user) await docRef.set(user);
};

export default addUserToCollection;