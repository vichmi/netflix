import React, {useState, useRef} from 'react';
import './SignInScreen.css';
import {auth} from '../../../utils/firebase';

export default function SignInScreen({emailText}) {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((user) => {
            console.log(user);
        })
        .catch(err => {
            alert(err.message);
        })
    };

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((user) => {
            console.log(user)
        })
        .catch(err => alert(err.message));
    }

    return (
        <div className='signinScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type='email' placeholder='Email' defaultValue={emailText} />    
                <input ref={passwordRef} type='password' placeholder='Password' />
                <button type='submit' onClick={signIn}>Sign In</button>

                <p><span className='grey'>New to Netflix?</span> <span className='link' onClick={register}>Sign Up now.</span></p>
            </form>
        </div>
    )
}
