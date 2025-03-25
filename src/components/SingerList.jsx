import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft } from 'lucide-react' 
import artistPic from '../data/artistsPictures'

function SingerList({ icon, titr ,showHeader, reverse}) {

    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false)
      }, 3000);
      
      return () => clearTimeout(timeout)
    },[])




    return (
        <div className='w-full mt-4'>
            {/* Header */}
            {showHeader && (
                <div className='w-[97%] h-fit flex justify-between items-center bg-background-accent px-2 py-1.5 mx-auto rounded-2xl font-kalameh-base' >
                    <span className='flex items-center gap-2'>
                        <img className='w-5' src={`/src/assets/icons/${icon}.png`} alt="iran" />
                        <h3 className='text-base text-text-primary'>{titr}</h3>
                    </span>
                    <span className='flex items-center text-text-accent'>
                        <button className='text-xs '>دیدن همه</button>
                        <ChevronLeft/>
                    </span>
                </div>
            )}

            {/* Swiper */}
            <div className='pr-3 text-center'>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={9}
                    slidesPerView={4.5}
                    className='**:rounded-full mt-3 '
                >
                    {loading ? 
                        [...Array(5)].map((_, index) => (
                            <SwiperSlide key={index} className="flex flex-col animate-pulse">
                                <div className="w-24 h-24 bg-gray-500 rounded-full mb-2"></div>
                                <div className="h-4 w-24 justify-center bg-gray-500 rounded mt-1"></div>
                            </SwiperSlide>
                        ))
                    :
                        (reverse ? [...artistPic].reverse() : artistPic).map((item) => (
                            <SwiperSlide className='flex flex-col items-center cursor-pointer' key={item.id}>
                                <img className='mb-2 w-24 h-24 rounded-full object-cover border-2 border-text-primary' src={item.src} />
                                <span className='font-dana-base text-tiny text-text-secondary text-center overflow-hidden w-24'>{item.title}</span>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default SingerList
