import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyATNgpXLfcSZfC57fRDjQDE0Gpf9gepMoI",
  authDomain: "video-86277.firebaseapp.com",
  projectId: "video-86277",
  storageBucket: "video-86277.appspot.com",
  messagingSenderId: "550610337757",
  appId: "1:550610337757:web:f263b08d3725769dad8034"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app