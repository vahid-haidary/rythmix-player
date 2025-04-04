import React from 'react'
import {ChevronLeft} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import playlistData from '../data/playlistCardData'
import { Link, useNavigate } from 'react-router-dom'

function PlaylistCard() {

  const navigate = useNavigate()

  return (
    <>
    <div className='flex flex-col gap-2 mt-4'>

        <div className='flex justify-between items-center px-2.5'>
          <span className='font-kalameh-extra text-[26px] pr-2'>پلی لیست ها</span>
          <button className='flex items-center text-xs font-kalameh-base'>
            <Link to={"/playlist"}>دیدن همه</Link>
            <ChevronLeft />
          </button>
        </div>

    <div>
        <div className='bg-background-secondary flex pr-24 mt-3 rounded-md relative'>
        <div className='flex items-center gap-1 absolute top-[50px] right-[25px] max-sm:top-[46px]'>
            <span><img className='w-8 h-4' src="/assets/icons/iran.png" alt="iran" /></span>
            <span><ChevronLeft/></span>
          </div>
          <Swiper 
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={4}
          breakpoints={{
            520: {
              slidesPerView: 4,
            },
            360: {
              slidesPerView: 3  ,
            },
            0: {
              slidesPerView: 3,
            },
            
          }}
          className='*:py-4 *:shadow **:cursor-pointer'
          >
            {playlistData.slice(0,9).map((item,index) => (
                  <SwiperSlide key={index}>
                  <img className='rounded-lg' src={item.image} alt={item.title} onClick={()=> navigate("/category")} />
                </SwiperSlide>
            ))}
          </Swiper>
    
        </div>
      </div>
    <div>
        <div className='bg-background-secondary flex pr-24 mb-4 rounded-md relative'>
        <div className='flex items-center gap-1 absolute top-[50px] right-[25px] max-sm:top-[46px]'>
            <span><img className='w-6 h-6' src="/assets/icons/world.png" alt="world" /></span>
            <span><ChevronLeft/></span>
          </div>
          <Swiper 
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={4}
          breakpoints={{
            520: {
              slidesPerView: 4,
            },
            360: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 3,
            },
            
          }}
          className='*:py-4 *:shadow **:cursor-pointer'
          >
            {playlistData.slice(9,17).map((item,index) => (
                  <SwiperSlide key={index}>
                  <img className='rounded-lg' src={item.image} alt={item.title} onClick={()=> navigate("/category")} />
                </SwiperSlide>
            ))}
          </Swiper>
    
        </div>
      </div>
    </div>
    </>
  )
}

export default PlaylistCard