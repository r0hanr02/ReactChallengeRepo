
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD2AXHU32RhFPz5E8_X5hvzbAQzvYcyVpo",
    authDomain: "vitecontact-fd9e9.firebaseapp.com",
    projectId: "vitecontact-fd9e9",
    storageBucket: "vitecontact-fd9e9.firebasestorage.app",
    messagingSenderId: "1034897490337",
    appId: "1:1034897490337:web:9ac89dbb3df6678f630be0",
    measurementId: "G-KP377P0LZ4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
