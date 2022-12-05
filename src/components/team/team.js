import React, { useState } from 'react';
import './team.css';

export default function Team() {
    const [data,setData] = useState([
        {id:1,title:"CONSECTETUR",image:require('./images/img-4.png')},
        {id:2,title:"MAGNA ALIQUA",image:require('./images/img-5.png')},
        {id:3,title:"AONSECTETUR",image:require('./images/img-6.png')},
        {id:4,title:"NONSECTETUR",image:require('./images/img-7.png')},
    ])
  return (
    <div className='team' id='team'>
        <div className='container'>
            <div className='head'>
                <h1><span>Our</span> <img src={require('./images/icon-1.png')} alt="image" /> Team</h1>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className='content'>
                {
                    data.map((element) =>
                        <div className='member' key={element.id}>
                            <div className='image'>
                                <img src={element.image} alt="image" />
                            </div>
                            <div className='text'>
                                <h2>{element.title}</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                    when looking at its layout. The point of using Lorem</p>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    </div>
  )
}
