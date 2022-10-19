const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('../key/firebaseauth.json');

initializeApp({
  credential: cert(serviceAccount)
});

export const database = getFirestore();
