import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCqTjOSZqgPIXh23fE7ee9Yhz8zKGzaZ4",
  authDomain: "pinterestclone-d6454.firebaseapp.com",
  projectId: "pinterestclone-d6454",
  storageBucket: "pinterestclone-d6454.appspot.com",
  messagingSenderId: "985564348928",
  appId: "1:985564348928:web:763af11097c8e9af310ee5",
  measurementId: "G-S7519X16LR"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export for use in your application
export const auth = getAuth(app);
