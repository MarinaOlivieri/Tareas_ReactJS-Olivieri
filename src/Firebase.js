import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBd7S-GMiQlExwpqznVRCj8pO4RVI25pls",
  authDomain: "proyecto-react-coder-533a8.firebaseapp.com",
  projectId: "proyecto-react-coder-533a8",
  storageBucket: "proyecto-react-coder-533a8.appspot.com",
  messagingSenderId: "37108419261",
  appId: "1:37108419261:web:0cea294c15e3202c1645d4"
};

const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)

