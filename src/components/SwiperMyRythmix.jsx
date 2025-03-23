import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from 'swiper/modules';

function SwiperMyRythmix() {
  return (
    <div>
    <Swiper 
       slidesPerView={2.5} 
       modules={[Navigation]}
          >
        <SwiperSlide><img className='rounded-3xl w-[190px] h-[152px] mx-auto' src="/src/assets/banner/myRytmix/myRytmix(1).png" alt="Banner1" /></SwiperSlide>
        <SwiperSlide><img className='rounded-3xl w-[190px] h-[152px] mx-auto' src="/src/assets/banner/myRytmix/myRytmix(2).png" alt="Banner2" /></SwiperSlide>
        <SwiperSlide><img className='rounded-3xl w-[190px] h-[152px] mx-auto' src="/src/assets/banner/myRytmix/myRytmix(3).png" alt="Banner2" /></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default SwiperMyRythmix