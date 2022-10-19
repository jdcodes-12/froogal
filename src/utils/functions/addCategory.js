import database from "../../firebase"
const docRef = database.collection('categories');

// This is here to show the structure of our category collections
const categoryStructure = {
    name: "",
  };

export const addCategoryToCollection = async (category) => {
    if(category) await docRef.doc().set(category);
};