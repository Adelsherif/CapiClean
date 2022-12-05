import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className='home' id='home'>
        <div className='container'>
            <div className='text'>
                <h3>BEST YOUR</h3>
                <h1>HOUSE CLEAN</h1>
                <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                <a href='#'>Contact Us</a>
            </div>
            <div className='image' >
                <img src={require('./images/img-1.png')} alt="image" />
            </div>
        </div>
    </div>
  )
}
