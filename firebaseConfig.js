// import { initializeApp } from "@react-native-firebase/app";
// import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
// };

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// export { storage };

// Import the functions you need from the SDKs you need
import firebase from "@react-native-firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtDPMq5pxwlCemiuC9G9lB-3SJQJXY-qI",
  authDomain: "test-383bc.firebaseapp.com",
  projectId: "test-383bc",
  storageBucket: "test-383bc.appspot.com",
  messagingSenderId: "146973629812",
  appId: "1:146973629812:web:c8379e7b3b098e026fa021",
};

// Initialize Firebase
export { firebaseConfig };
