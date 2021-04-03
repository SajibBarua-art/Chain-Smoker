import React, { useContext } from 'react';
import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import googleIcon from '../../images/googleIcon.png';
import './Login.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [userState, setUserState] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                setUserState(user);
                history.replace(from);
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='d-flex justify-content-center my-5'>
            <button className='login-btn' onClick={handleGoogleSignIn}>
                 <img className='google-icon' src={googleIcon} alt=""/> Login with Google
            </button>
        </div>
    );
};

export default Login;