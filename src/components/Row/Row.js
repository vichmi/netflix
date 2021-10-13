import React, {useEffect, useState, useRef} from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/Requests';
import { IconContext } from 'react-icons';
import {IoChevronForwardSharp, IoChevronBackSharp} from 'react-icons/io5';
import {Button} from 'react-scroll';

export default function Row({type, title}) {

    const [arr, setArr] = useState([]); 
    const ref = useRef(null);

    const scrollBtn = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    useEffect(() => {
        (async () => {
            const res = await axios.get(requests[type]);
            setArr(res.data.results);
            console.log(res.data.results);
        })();
    }, []);

    return (
        <div>
            <h2 style={{color: 'white', marginLeft: '3%'}}>{title}</h2>

            <div className='rowContainer'>
                <div className='row'>
                    {/* <IconContext.Provider style={{paddingLeft: '2rem'}} value={{ color: "black", size: '1.3em' }}>
                            <IoChevronBackSharp />
                    </IconContext.Provider> */}
                    {arr.map((film, index) => {
                        return (
                            <img key={index} src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} width='150' height='250' />
                        )
                    })}
                </div>
                    <IconContext.Provider value={{ color: "white", size: '8em', className: "scrollButons"}}>
                        <IoChevronForwardSharp onClick={() => scrollBtn(20)} />
                    </IconContext.Provider>
            </div>
        </div>
    )
}
