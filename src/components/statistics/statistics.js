import React from 'react';
import './statistics.css'

export default function Statistics() {
  return (
    <div className='statistics' id='statistics'>
        <div className='container'>
            <div className='head'>
                <h1><span>Why</span> <img src={require('./images/icon-1.png')} alt="image" /> Choose Us</h1>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className='numbers'>
                <div className='box'>
                    <h1>12004+</h1>
                    <p>OUR CLIENTS</p>
                </div>
                <div className='box'>
                    <h1>10004+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                <div className='box'>
                    <h1>804+</h1>
                    <p>SUPPORTS</p>
                </div>
                <div className='box'>
                    <h1>905+</h1>
                    <p>AWARDS</p>
                </div>
            </div>
            <div className='image'>
                <img src={require('./images/img-3.png')} alt="image" />
            </div>
            <div className='btn'>
                <button>GET A QUATO</button>
            </div>
        </div>
    </div>
  )
}
