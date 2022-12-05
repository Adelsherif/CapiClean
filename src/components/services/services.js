import React from 'react';
import './services.css';
import {FiLayers, FiPackage} from 'react-icons/fi';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Services() {
  return (
    <div className='services' id='services'>
        <div className='container'>
            <div className='head'>
                <h1><span>Our</span> <img src={require('./images/icon-1.png')} alt="image" /> Services</h1>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className='content'>
                <Swiper 
                navigation={true}
                modules={[Navigation]}
                spaceBetween={30}
                loop={true}
                breakpoints= {{
                    0: {slidesPerView: 1},
                    768: {slidesPerView: 2}
                }}
                className="mySwiper">
                    <SwiperSlide className='swiperSlide'>
                        <div className='box box-s'>
                            <div className='icon'><FiLayers /></div>
                            <h1 className='address'>Tile & Grout</h1>
                            <p className='text'>Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                        <div className='box'>
                            <div className='icon'><FiPackage /></div>
                            <h1 className='address'>Carpet Cleaning</h1>
                            <p className='text'>Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                    <div className='box box-s'>
                            <div className='icon'><FiLayers /></div>
                            <h1 className='address'>Tile & Grout</h1>
                            <p className='text'>Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                        <div className='box'>
                            <div className='icon'><FiPackage /></div>
                            <h1 className='address'>Carpet Cleaning</h1>
                            <p className='text'>Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                    <div className='box box-s'>
                            <div className='icon'><FiLayers /></div>
                            <h1 className='address'>Tile & Grout</h1>
                            <p className='text'>Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                        <div className='box'>
                            <div className='icon'><FiPackage /></div>
                            <h1 className='address'>Carpet Cleaning</h1>
                            <p className='text'>Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}
