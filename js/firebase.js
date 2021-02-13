// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAvFBBcZ9lZrH9UX6V-knG5kuE9RMJX0A4",
  authDomain: "web-ds-90d8f.firebaseapp.com",
  databaseURL: "https://web-ds-90d8f-default-rtdb.firebaseio.com",
  projectId: "web-ds-90d8f",
  storageBucket: "web-ds-90d8f.appspot.com",
  messagingSenderId: "875224409930",
  appId: "1:875224409930:web:04de329605a773723e43b3",
  measurementId: "G-48SKQF0SX5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
db.settings = ({ timestampsInSnapshots: true });





