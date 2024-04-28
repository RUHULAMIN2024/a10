import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default ()=> {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full h-60 md:h-[500px]' src="https://i.ibb.co/WKCBVpW/1.jpg" alt="image not found" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-60 md:h-[500px]' src="https://i.ibb.co/g6W5LZf/2.jpg" alt="image not found" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-60 md:h-[500px]' src="https://i.ibb.co/BTXyMbf/3.jpg" alt="image not found" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-60 md:h-[500px]' src="https://i.ibb.co/TwHqbMX/4.jpg" alt="image not found" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-60 md:h-[500px]' src="https://i.ibb.co/nQH9TD3/5.jpg" alt="image not found" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-60 md:h-[500px]' src="https://i.ibb.co/W0rwM16/6.jpg" alt="image not found" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
