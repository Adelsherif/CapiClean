import React, { useState } from 'react';
import './header.css';
import {FiSearch,FiX} from 'react-icons/fi';

export default function Header() {
    const [toggle,setToggle] = useState(0);
    return (
        <div className='header'>
            <div className='container-fluid'>
                <div className='logo'>
                    <img src={require('./images/logo.png')} alt='image' />
                </div>
                <div className='list'>
                    <ul className='fList'>
                    <li className='search'><a href='#' ><FiSearch /></a></li>
                        <li>
                            <div className='bars' onClick={() => setToggle(1)}>
                                <span></span>
                                <span className='mid'></span>
                                <span></span>
                                </div>
                                <ul className={toggle === 0 ? 'sList' : 'sList show'}>
                                    <li className='xIcon' onClick={() => setToggle(0)}><FiX /></li>
                                    <li><a href='#home'>Home</a></li>
                                    <li><a href='#services'>Services</a></li>
                                    <li><a href='#about'>About</a></li>
                                    <li><a href='#statistics'>Choose</a></li>
                                    <li><a href='#team'>Team</a></li>
                                    <li><a href='#contact'>Contact Us</a></li>
                                </ul>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
