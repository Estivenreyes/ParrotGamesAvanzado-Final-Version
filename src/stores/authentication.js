import { defineStore } from "pinia";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const useAuthentication = defineStore("authentication", {
    state: () => ({
        user: null,
    }),

    getters: {
        getProducts: (state) => [...state.products],
    },

    actions: {
        signIn(email, password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log("logged user", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },
        newUser(email, password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("user created", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },
        async newUserAwait(email, password) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log("User create", userCredential.user);
            } catch (error) {
                alert(error);
            }
        },

        logOut() {
            signOut(auth)
                .then(() => {
                    console.log("usuario fuera");
                })
                .catch((error) => {
                    alert(error);
                });
        },
    },
});
