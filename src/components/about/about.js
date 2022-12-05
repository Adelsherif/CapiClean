import React from 'react';
import './about.css'
import {FaLongArrowAltRight} from 'react-icons/fa';

export default function About() {
  return (
    <div className='about' id="about">
        <div className='container'>
            <div className='image'>
                <img src={require('./images/img-2.png')} alt="image" />
            </div>
            <div className='text'>
                <h1><span>About</span> <img src={require('./images/icon-1.png')} alt="image" /> Cleaning</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <a href='#'><span>READ MORE</span><span><FaLongArrowAltRight /></span></a>
            </div>
        </div>
    </div>
  )
}
