import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function PlaylistBannerSec() {
  return (
    <div>
            <div className='w-[90%] mx-auto mt-5 mb-1'>
        <Swiper 
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{delay: 3000, disableOnInteraction:false ,pauseOnMouseEnter:true, pauseOnMouseLeave:true}}
        loop={true}
        >
            {[...Array(6)].map((_,index) => (
            <SwiperSlide key={index}>
                <img className='cursor-pointer' src={`/src/assets/banner/playlistBannerSecond/banner-sec${index + 1}.png`} alt={`banner${index + 1}`} />
            </SwiperSlide>
                
            ))}

        </Swiper>
    </div>
    </div>
  )
}

export default PlaylistBannerSec