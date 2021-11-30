import React, {useState, useEffect} from 'react';
import avatar from '../../images/avatar.png';
import Nav from '../../components/Nav/Nav';
import './Profile.css'
import { useSelector } from 'react-redux';
import {selectUser} from '../../utils/userSlice';
import {auth} from '../../utils/firebase';
import { useCookies } from 'react-cookie';

export default function Profile() {
    const [plan, setPlan] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(['plan']);
    const user = useSelector(selectUser);

    useEffect(() => {
        setPlan(cookies.plan);
    }, [])
    return (
        <div className='profile_container'>
            <Nav />
            <div className='profile_body'>
            <h1>Edit Profile</h1>
            <div className='profile_info'>
                <img src={avatar} className="profile_avatar" alt='avatar' />
                <div className='profile_details'>
                    <h2>{user.email}</h2>
                    <div className='profile_plans_container'>
                        <h3>Plans</h3> 
                        <div className='profile_plans'>
                            <div className='profile_plan'>
                                <p><span>Netflix Standard <br /> 1080p</span></p>
                                <button onClick={() => {
                                    setPlan('Standard');
                                    setCookie('plan', 'Standard');
                                }}>{plan == 'Standard' ? 'Unsubrscribe' : 'Subscribe'}</button>
                            </div>
                            <div className='profile_plan'>
                                <p><span>Netflix Basic <br /> 480p</span></p>
                                <button onClick={() => {
                                    setPlan('Basic');
                                    setCookie('plan', 'Basic');
                                }}>{plan == 'Basic' ? 'Unsubrscribe' : 'Subscribe'}</button>
                            </div>
                            <div className='profile_plan'>
                                <p><span>Netflix Premium <br /> 4k HDR</span></p>
                                <button onClick={() => {
                                    setPlan('Premium');
                                    setCookie('plan', 'Premium');
                                }}>{plan == 'Premium' ? 'Unsubrscribe' : 'Subscribe'}</button>
                            </div>
                        </div>
                        <button className='signOut' onClick={() => auth.signOut()}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
