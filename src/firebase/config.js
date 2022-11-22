import firebase from "firebase"

const config={
    apiKey: "AIzaSyAyUXsb1HMBvhh8CkluuVbjRPEO6XtPVxQ",
    authDomain: "galleryapp-9a474.firebaseapp.com",
    databaseURL: "https://galleryapp-9a474-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "galleryapp-9a474",
    storageBucket: "galleryapp-9a474.appspot.com",
    messagingSenderId: "164263163570",
    appId: "1:164263163570:web:3f108fb80ad779eceb7bab",
    measurementId: "G-JL4BV9PYHZ"
}

export const firebaseui={
    signInFlow:"popup",
    signInOptions:[
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
}

firebase,initializeApp(config);

export default firebase;