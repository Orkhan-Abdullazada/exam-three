// import React from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Section4.scss';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
function Section4() {
  return (
    <div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 500,
            disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='section4__img'>
         <div className='sagol'>
          <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
          <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
          <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ex impedit a enim earum eum, est beatae asperiores debitis pariatur corrupti inventore quo
            </p>
          <h5>Van Helsing</h5>
          </div> 
       </SwiperSlide>
        <SwiperSlide className='section4__img'>
         <div className='sagol'>
          <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
          <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
          <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ex impedit a enim earum eum, est beatae asperiores debitis pariatur corrupti inventore quo
            </p>
            <h5>Van Helsing</h5>
          </div> 
       </SwiperSlide>
        <SwiperSlide className='section4__img'>
         <div className='sagol'>
          <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
          <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
          <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ex impedit a enim earum eum, est beatae asperiores debitis pariatur corrupti inventore quo
            </p>
            <h5>Van Helsing</h5>
          </div> 
       </SwiperSlide>
        <SwiperSlide className='section4__img'>
         <div className='sagol'>
          <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
          <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
          <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ex impedit a enim earum eum, est beatae asperiores debitis pariatur corrupti inventore quo
            </p>
            <h5>Van Helsing</h5>
          </div>
            
       </SwiperSlide>
        <SwiperSlide className='section4__img'>
         <div className='sagol'>
          <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
          <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
          <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ex impedit a enim earum eum, est beatae asperiores debitis pariatur corrupti inventore quo
            </p>
            <h5>Van Helsing</h5>
          </div> 
       </SwiperSlide>
        <SwiperSlide className='section4__img'>
         <div className='sagol'>
          <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
          <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ex impedit a enim earum eum, est beatae asperiores debitis pariatur corrupti inventore quo
            </p>
            <h5>Van Helsing</h5>
          </div> 
       </SwiperSlide>
       
      </Swiper>
      
    </div>
  )
}

export default Section4
