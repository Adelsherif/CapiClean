import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <div className='footer' id='contact'>
            <div className='news'>
                <div className='container'>
                    <div className='text'>
                        <h1>Newsletter</h1>
                        <p>Tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className='form'>
                        <form>
                            <input type='email' placeholder='ENTER YOUR E-MAIL' />
                            <button>SUBSCRIBE</button>
                        </form>
                    </div>
            </div>
                </div>
                <div className='contact'>
                    <div className='container'>
                        <div className='address'>
                            <h1>Contact <img src={require('./images/icon-2.png')} alt="image" /> Us</h1>
                            <ul>
                                <li><a href='#'><img src={require('./images/map-icon.png')} alt="image" /><span> Locations</span></a></li>
                                <li><a href='#'><img src={require('./images/call-icon.png')} alt="image" /><span> +71 9876543210</span></a></li>
                                <li><a href='#'><img src={require('./images/map-icon.png')} alt="image" /><span> demo@gmail.com</span></a></li>
                            </ul>
                        </div>
                        <div className='register'>
                            <div className='login'>
                                <form>
                                    <input type='text' placeholder='Your Name' />
                                    <input type='email' placeholder='YOUR E-MAIL' />
                                    <input type='text' placeholder='Phone Number' />
                                    <textarea placeholder='Message'></textarea>
                                    <input type='submit' placeholder='SEND' value='SEND' />
                                </form>
                            </div>
                            <div className='map'>
                                <iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                <ul>
                                    <li><a href='#'><img src={require('./images/fb-icon1.png')} alt="image" /></a></li>
                                    <li><a href='#'><img src={require('./images/twitter-icon1.png')} alt="image" /></a></li>
                                    <li><a href='#'><img src={require('./images/instagram-icon1.png')} alt="image" /></a></li>
                                    <li><a href='#'><img src={require('./images/linkden-icon1.png')} alt="image" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <p>Copyright 2022 All Right Reserved By Adel saad Sherif</p>
                </div>
        </div>
)
}
