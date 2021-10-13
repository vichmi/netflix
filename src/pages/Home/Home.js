import React from 'react'
import Nav from '../../components/Nav/Nav';
import './Home.css'
import Banner from '../../components/Banner/Banner';
import Rows from '../../components/Row/Rows';

export default function Home() {
    return (
        <div className='container'>
            <Nav />
            <Banner />
            <Rows />
        </div>
    )
}
