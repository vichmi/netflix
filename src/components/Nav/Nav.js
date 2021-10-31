import React, {useState, useEffect} from 'react'
import './Nav.css';
import logo from '../../images/logo.png'
import avatar from '../../images/avatar.png';
import { IconContext } from 'react-icons';
import {FaSearch} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

export default function Nav() {
    const [transparent, setTransparent] = useState(true);
    let history = useHistory();
    const [showSearchBox, setShowSearchBox] = useState(history.location.pathname == "/search" ? true : false);
    const someFunctionIdk = (e) => {
        let value = e.target.value;
        if(value.length > 0) {
            history.push('/search?q='+value)
        }else{
            history.push('/');
        }   
        console.log(history);
    }

    const transitionY = () => {
        if(window.scrollY > 10) {
            setTransparent(false);
        }else{
            setTransparent(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionY);
        return () => window.removeEventListener('scroll', transitionY);
    }, []);

    return (
        <div className={`navbar ${transparent ? 'transparent' : 'black'}`}>
            <div className='content'>
                <a href='/'><img src={logo} className="logoimg" alt='Netflix Logo' /></a>
                <ul className="left">
                    <li><a href="/">Home</a></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/">Series</a></li>
                    <li><a href="/">My List</a></li>
                </ul>
                {!showSearchBox ? 
                <IconContext.Provider value={{ color: "white", className: "rightIcon", size: '1.3em' }}>
                        <FaSearch onClick={() => {
                            setShowSearchBox(true);
                        }} />
                </IconContext.Provider> :
                <div className='parentSearch'>
                    <div className='searchContainer'>
                        <div className='searchContent'></div>
                                <IconContext.Provider value={{ color: "white", className: "searchIcon", size: '1.3em' }}>
                                    <FaSearch  onClick={() => {
                                        setShowSearchBox(false);
                                    }} />
                                </IconContext.Provider>
                                <input type='text' placeholder='Enter film or series title' className='searchBox' autoFocus onChange={e => someFunctionIdk(e)} />
                    </div>
                </div>}
                <img src={avatar} className="avatar" alt='avatar' />
            </div>
        </div>
    )
}
