import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { } from 'firebase/auth';
import { } from 'firebase/app-check';

/* A Firebase App is a container-like object that stores common configuration and shares authentication across Firebase services. After you initialize a Firebase App object in your code, you can add and start using Firebase services.*/
const firebaseConfiguration = {
  // ... config options here
};

const app = initializeApp(firebaseConfiguration);
const appDatabase = getFirestore(app);

/* Example of getting data from the Firestore DB
//Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
*/