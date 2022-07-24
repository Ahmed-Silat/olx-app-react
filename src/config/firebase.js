import { initializeApp } from "firebase/app";
import {
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbLwy0j4Hteme9tBA_rspqtYhWMAgOaWI",
  authDomain: "signup-login-36fed.firebaseapp.com",
  projectId: "signup-login-36fed",
  storageBucket: "signup-login-36fed.appspot.com",
  messagingSenderId: "430632969060",
  appId: "1:430632969060:web:0e930a47aed38aa23dd071",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);

async function getData() {
  // const querySnapshot = await getDocs(collection(db, "advertisement"));

  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });

  const q = query(collection(db, "advertisement"));

  const querySnapshot = await getDocs(q);

  let data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data = [...data, doc.data()];
  });
  // console.log("firebase", data);

  return data;
}

async function signUp(form) {
  const { email, password, name } = form;

  await createUserWithEmailAndPassword(auth, email, password);
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   // ...
  // alert("Successful!");
  await addDoc(collection(db, "users"), {
    name: name,
    email: email,
  });
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   alert(errorMessage);
  //   // ..
  // });
}

async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      // alert("Successfully logged in!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function ad(data) {
  const { title, description, price } = data;
  console.log({ data });
  // addDoc(collection(db, "advertisement"), {
  //   title: title,
  //   description: description,
  //   price: price,
  // });

  return addDoc(collection(db, "advertisement"), {
    title: title,
    description: description,
    price: price,
  });
}

function getLoggedInUser() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return user;
    } else {
      return null;
    }
  });
}

// async function uploadImage() {}

// async function updateProfile() {}

export { signUp, login, ad, getLoggedInUser, getData };
// uploadImage,
// updateProfile,
