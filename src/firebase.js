import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDnkbFqocFJZjnG7VRGoXgEEiSgqP9pNVI',
  authDomain: 'sochill.firebaseapp.com',
  projectId: 'sochill',
  storageBucket: 'sochill.appspot.com',
  messagingSenderId: '58793930355',
  appId: '1:58793930355:web:34ef34fbd7f13020d54406',
  measurementId: 'G-DG71CDT2W2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
