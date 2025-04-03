import { ChevronLeft,Crown } from 'lucide-react'
import React from 'react'
import SwiperMyRythmix from '../components/SwiperMyRythmix'
import { useNavigate } from 'react-router-dom'

function MyRythmix() {
  const navigate = useNavigate()

  return (
    <div>
      <div className='w-full bg-background-secondary rounded-b-[40px] font-dana-reg'>
        <div className='flex flex-col '>
            <div className='flex items-center justify-center '>
            <img className='w-60 h-36 -mx-[60px]' src="/src/assets/icons/listenSong.png" alt="listenSong" />
            <div className='flex flex-col items-center gap-2.5 text-primary'>
            <Crown />
              <span className='text-sm'>اعتبار ویژه:</span>
              <span className='font-dana-bold text-4xl font-extrabold'>257<span className='text-sm font-dana-reg font-extralight'>روز</span></span>
            </div>
            </div>
            <div className='flex justify-center my-3'>
              <button className='bg-primary text-black px-14 py-3 rounded-3xl cursor-pointer' onClick={() =>navigate("/plans")}>افزایش اعتبار</button>
            </div>

            <div className='w-[90%] mt-6 mb-4 p-2 flex justify-between items-center mx-auto bg-background2 rounded-2xl border border-gray-500 cursor-pointer'>
              <div className='flex gap-3 items-center'>
              <img className='w-[60px] h-[60px]' src="/src/assets/icons/Vip.png" alt="" />
              <div className='flex flex-col gap-2'>
                <span className=' text-tiny-small text-primary'>پشتیبانی کاربران ویژه</span>
                <span className='text-xs text-text-accent'>پاسخگویی با اولویت ویژه</span>
              </div>
              </div>
            <ChevronLeft/>
            </div>
        </div>
      </div>

      <div className='my-8'>
        <SwiperMyRythmix/>
      </div>

      <div className='flex flex-col gap-3'>

        <div className='w-[90%] p-2 flex justify-between items-center mx-auto font-dana-base bg-background2 rounded-2xl cursor-pointer'>
          <div className='flex gap-3 items-center'>
            <img className='w-[60px] h-[60px]' src="/src/assets/icons/Vip.png" alt="" />
            <div className='flex flex-col gap-2'>
              <span className='text-tiny-small'>آهنگ های لایک شده</span>
              <span className='text-xs text-text-accent'>15 آهنگ</span>
            </div>
          </div>
          <ChevronLeft/>
        </div>

        <div className='w-[90%] p-2 flex justify-between items-center mx-auto font-dana-base bg-background2 rounded-2xl cursor-pointer'>
          <div className='flex gap-3 items-center'>
            <img className='w-[60px] h-[60px]' src="/src/assets/icons/Vip.png" alt="" />
            <div className='flex flex-col gap-2'>
              <span className='text-tiny-small'>پلی لیست های من</span>
              <span className='text-xs text-text-accent'>3 آهنگ</span>
            </div>
          </div>
          <ChevronLeft/>
        </div>

        <div className='w-[90%] p-2 flex justify-between items-center mx-auto font-dana-base bg-background2 rounded-2xl cursor-pointer'>
          <div className='flex gap-3 items-center'>
            <img className='w-[60px] h-[60px]' src="/src/assets/icons/Vip.png" alt="" />
            <div className='flex flex-col gap-2'>
              <span className='text-tiny-small'>پلی لیست های دنبال شده</span>
              <span className='text-xs text-text-accent'>10 آهنگ</span>
            </div>
          </div>
          <ChevronLeft/>
        </div>

        <div className='w-[90%] p-2 flex justify-between items-center mx-auto font-dana-base bg-background2 rounded-2xl cursor-pointer'>
          <div className='flex gap-3 items-center'>
            <img className='w-[60px] h-[60px]' src="/src/assets/icons/Vip.png" alt="" />
            <div className='flex flex-col gap-2'>
              <span className='text-tiny-small'>هنرمندان دنبال شده</span>
              <span className='text-xs text-text-accent'>0 آهنگ</span>
            </div>
          </div>
          <ChevronLeft/>
        </div>
      </div>

      <div className='my-12 w-[90%] mx-auto font-dana-base  '>
        <div className='flex gap-2 items-center'>
          <span className='w-2 h-2 rounded-full bg-white block'></span>
          <h4>خواننده هایی که اخیرا دیده اید</h4>
        </div>

        <div className='p-4 mt-6 flex justify-around items-center mx-auto font-dana-base bg-background2 rounded-2xl cursor-pointer' onClick={() => navigate("/search")} >
            <img className='pt-2.5' src="/src/assets/icons/downloadsIcon.svg" alt="" />
          <div className='flex flex-col gap-2'>
            <span className='text-xs text-text-accent'>هنوز خواننده ای را ندیده اید!</span>
              <div className='flex gap-6'>
              <span className='text-tiny-small text-primary font-dana-bold max-xs:text-xs'>خواننده محبوبتان را جستجو کنید</span>
              <ChevronLeft className='text-primary'/>
              </div>
          </div>
          
        </div>

      </div>
      <div className='my-12 w-[90%] mx-auto font-dana-base  '>
        <div className='flex gap-2 items-center'>
          <span className='w-2 h-2 rounded-full bg-white block'></span>
          <h4>پلی لیست هایی که اخیرا دیده اید</h4>
        </div>

        <div className='p-4 mt-6 flex justify-around items-center mx-auto font-dana-base bg-background2 rounded-2xl cursor-pointer' onClick={() => navigate("/search")}>
            <img className='pt-2.5' src="/src/assets/icons/downloadsIcon.svg" alt="" />
          <div className='flex flex-col gap-2'>
            <span className='text-xs text-text-accent '>هنوز پلی لیستی ندیده اید!</span>
              <div className='flex gap-6'>
              <span className='text-tiny-small text-primary font-dana-bold max-xs:text-xs'>پلی لیست محبوبتان را جستجو کنید</span>
              <ChevronLeft className='text-primary'/>
              </div>
          </div>
          
        </div>

      </div>



    </div>
  )
}

export default MyRythmix