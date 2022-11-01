import { defineStore } from "pinia";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
        user: null,
    }),
    actions: {
        signIn(email, password) {
            console.log("Calling sing In");
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
                alert(errorMessage);
            }
        },
        logOut() {
            signOut(auth)
                .then(() => {
                    console.log("User out");
                })
                .catch((error) => {
                    alert(error);
                });
        },

        async addUserToDatabase(db, userId, userInfo) {
            try {
                await setDoc(doc(db, "users", userId), userInfo);
                alert("User created");
            } catch (error) {
                console.log(error);
            }
        },

        SignUp(email, password, name) {
            let newUser = { email, password, name };

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(newUser);
                    this.addUserToDatabase(db, user.uid, newUser);

                    console.log("User created");
                    alert("User Created Succesfully");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorMessage);
                });
        },

        validate() {
            let userId;

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const user = auth.currentUser;
                    console.log("USERID", user.uid);
                    userId = user.uid;
                } else {
                    console.log("User is not signed in");
                }
            });

            return userId;
        },
    },
});
