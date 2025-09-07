
// IMPORTANT: Replace with your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "studio-8374470844-7635e.firebaseapp.com",
  projectId: "studio-8374470844-7635e",
  storageBucket: "studio-8374470844-7635e.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
