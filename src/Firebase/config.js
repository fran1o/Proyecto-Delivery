
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBhZAMiYYjqj9aRqVZ6vGZ452LJ1Zghm0s",
  authDomain: "deliverypepote.firebaseapp.com",
  projectId: "deliverypepote",
  storageBucket: "deliverypepote.appspot.com",
  messagingSenderId: "860424776973",
  appId: "1:860424776973:web:45446a07b0f5222a279444",
  measurementId: "G-5LDD856DV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp () {
    return app
  }