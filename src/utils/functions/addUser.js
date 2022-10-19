import database from "../../firebase/index"
const docRef = database.collection('users');

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
    if(user) await docRef.doc().set(user);
};