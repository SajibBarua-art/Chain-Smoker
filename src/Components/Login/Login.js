import React, { useContext } from 'react';
import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [userState, setUserState] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // const credential = result.credential;
                // // This gives you a Google Access Token. You can use it to access the Google API.
                // const token = credential.accessToken;
                // // The signed-in user info.
                const user = result.user;
                
                setUserState(user);
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.email;
                // // The firebase.auth.AuthCredential type that was used.
                // const credential = error.credential;
                console.log(error);
            });
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
    );
};

export default Login;