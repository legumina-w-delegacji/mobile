import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyAEpUM63X2Z6EmKBoM8tXWYKhseH1rD9nE",
    authDomain: "bkihack.firebaseapp.com",
    projectId: "bkihack",
    storageBucket: "bkihack.appspot.com",
    messagingSenderId: "81159077054",
    appId: "1:81159077054:web:00ab87c2ca9c7f85e8b2ef",
    measurementId: "G-1ZQ4HHTL21"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);