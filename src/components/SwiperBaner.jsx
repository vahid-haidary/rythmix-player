import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Autoplay } from "swiper/modules";

function SwiperBaner() {
  return (
    <>
      <Swiper 
       modules={[Autoplay]}
       spaceBetween={10}
        autoplay={{delay: 3000, disableOnInteraction:false ,pauseOnMouseEnter:true, pauseOnMouseLeave:true}}
         loop={true} >
        <SwiperSlide><img className='rounded-3xl w-[90%] mx-auto' src="/assets/banner/banner1.png" alt="Banner1" /></SwiperSlide>
        <SwiperSlide><img className='rounded-3xl w-[90%] mx-auto' src="/assets/banner/banner2.png" alt="Banner2" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperBaner