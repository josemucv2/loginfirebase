
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyCY3UU1ZpXVJnbn6OeWKEW41OJbH_vnx0Q",
  authDomain: "system4data-540a1.firebaseapp.com",
  projectId: "system4data-540a1",
  storageBucket: "system4data-540a1.appspot.com",
  messagingSenderId: "124837892763",
  appId: "1:124837892763:web:e97d7d33e81aeaf7c56c3e"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)