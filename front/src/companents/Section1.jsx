// import React from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Sectin1.scss';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function Section1() {
  return (
    <div className='section1_all'>
         <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='section1_cover'><img src="https://preview.colorlib.com/theme/tasty/images/bg_3.jpg.webp" alt="" />
        <div className='section1__inside'>Tasty delicios Food
        <div className='inside__div'>see More</div></div>
        
        </SwiperSlide>
        <SwiperSlide className='section1_cover'><img src="https://preview.colorlib.com/theme/tasty/images/bg_1.jpg.webp" alt="" />
        <div className='section2__inside'>Book a table for yourself at a time convenient <br /> for you
        <div className='inside2__div'>see More</div></div>
        </SwiperSlide>
        <SwiperSlide className='section1_cover'><img src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg.webp" alt="" />
        <div className='section1__inside'>Life Is The Better
        <div className='inside__div'>see More</div></div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Section1
