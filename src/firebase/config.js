// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useAuthenticationStore } from "../stores/authentication";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCn5HFOsrKLGpME2QsGUcM6eHD2jhKXu4Y",
    authDomain: "web-avanzada-adbf9.firebaseapp.com",
    projectId: "web-avanzada-adbf9",
    storageBucket: "web-avanzada-adbf9.appspot.com",
    messagingSenderId: "247716093235",
    appId: "1:247716093235:web:21882b96790d5d6d513246",
    measurementId: "G-GQ6T8F5PW8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    const authStore = useAuthenticationStore();
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        authStore.user = user;
        console.log(authStore.user);
    } else {
        authStore.user = null;
        console.log(authStore.user);
    }
});

export { auth };
