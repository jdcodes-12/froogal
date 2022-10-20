import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = require('../../key/firebaseauth.json');
const app = initializeApp({ firebaseConfig, projectId: firebaseConfig?.project_id });

export const db = getFirestore(app);