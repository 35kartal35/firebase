import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyANhl2Q1bRvfmpMrHazRkpZaBF6b4VfqcM",
    authDomain: "mehmet-76b8c.firebaseapp.com",
    projectId: "mehmet-76b8c",
    storageBucket: "mehmet-76b8c.appspot.com",
    messagingSenderId: "817949088174",
    appId: "1:817949088174:web:b558937beb3332b32c103f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



//read data

const ref = collection(db, "telephone");
getDocs(ref).then((snapshot) => {
    const mehmet = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })); console.log(mehmet)
})
    .catch((error) => { console.log(error) });