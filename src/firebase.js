
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyAhnyxN_cMxuepuDR0C0vXbOF4ZpbpAHPc",
  authDomain: "task-manager-70622.firebaseapp.com",
  projectId: "task-manager-70622",
  storageBucket: "task-manager-70622.appspot.com",
  messagingSenderId: "506397407498",
  appId: "1:506397407498:web:4a506a45954fb72b27e2f3",
  measurementId: "G-9VMK377STF",
  databaseURL: "https://task-manager-70622.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth };