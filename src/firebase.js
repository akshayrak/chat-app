import firebase from 'firebase'



  // Initialize Firebase

  const firebaseApp= firebase.initializeApp({

    apiKey: "AIzaSyD35o8tYFOLyq4ndXaFRyM0XIx-8w9lFC8",

    authDomain: "chat-app-e5ae0.firebaseapp.com",

    projectId: "chat-app-e5ae0",

    storageBucket: "chat-app-e5ae0.appspot.com",

    messagingSenderId: "981898308946",

    appId: "1:981898308946:web:d218d4fb9889b4e8119e8b"

  });

  const db= firebaseApp.firestore()

  const auth = firebase.auth()

  export { db, auth }