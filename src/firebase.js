import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDnkbFqocFJZjnG7VRGoXgEEiSgqP9pNVI',
  authDomain: 'sochill.firebaseapp.com',
  projectId: 'sochill',
  storageBucket: 'sochill.appspot.com',
  messagingSenderId: '58793930355',
  appId: '1:58793930355:web:34ef34fbd7f13020d54406',
  measurementId: 'G-DG71CDT2W2',
});

export const auth = app.auth();
export default app;
