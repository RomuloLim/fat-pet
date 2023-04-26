import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA0fGrgKviYOPbRO5Vvp2-BCkXOSiuekh4",
    authDomain: "fatpet-cb9a9.firebaseapp.com",
    projectId: "fatpet-cb9a9",
    storageBucket: "fatpet-cb9a9.appspot.com",
    messagingSenderId: "550456649017",
    appId: "1:550456649017:web:3bb10b536e93405606b4e8",
    measurementId: "G-RCNL3N58P1"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);