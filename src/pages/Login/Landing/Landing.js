import React, {useState, useEffect} from 'react';
import './Landing.css'
import logo from '../../../images/logo.png';
import SignInScreen from './SignInScreen';

export default function Landing() {

    const [signIn, setSignIn] = useState(false);
    const [emailText, setEmailText] = useState('');

    return (
        <div className='landind__container'>
            <div className='nav'>
                <img src={logo} alt='netflix logo' width={200} height={60} />
                <button onClick={() => setSignIn(true)}>Sign In</button>

                <div className='gradient'></div>
            </div>

                <div className='body'>
                    {signIn ? (
                        <SignInScreen emailText={emailText} />
                    ) : <> <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <div className='loginInput'>
                        <form>
                            <input type='email' placeholder='Email Address' onChange={e => {setEmailText(e.target.value)}} />
                            <button className='getStarted' onClick={() => setSignIn(true)}>Get Started</button>
                        </form>
                    </div> </>}
                    
            </div>
        </div>
    )
}
