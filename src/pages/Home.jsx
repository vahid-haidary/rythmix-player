import React from 'react'
import SwiperBaner from '../components/SwiperBaner'
import PlaylistCard from '../components/PlaylistCard'
import InsightCard1403 from '../components/InsightCard1403'
import MusicTemplate from '../components/MusicTemplate'
import {ChevronLeft} from "lucide-react"
import PlaylistBanner from '../components/PlaylistBanner'

function Home() {
  


  return (
    <>
    {/* Header Banner */}
    <div className='mt-6'>
      <SwiperBaner/>
    </div>

    
      {/* Playlist-music */}
      <PlaylistCard/>

      {/* insight user banner */}
      <InsightCard1403/>

      {/* Newset template */}
      <div className='flex flex-col'>
        <h2 className='font-kalameh-extra text-title tracking-wide pr-4'>
          جدیدترین ها 
          <span className='font-kalameh-base text-sm text-text-primary mr-2'>
            (ویژه)
            </span>
        </h2>
      <MusicTemplate titr="ایران" icon="iran" reverse={false} showHeader={true} showSubHeader={true}/>
      <MusicTemplate titr="جهان" icon="world" reverse={true} showHeader={true} showSubHeader={true} />
      </div>

      {/* remix */}
      <div className='w-full flex flex-col gap-2 pb-8 bg-background-secondary py-4 mt-3 '>
        <div className='flex justify-between '>
        <h2 className='font-kalameh-extra text-title pr-3 '>
        میکس ها 
          <span className='font-kalameh-base text-sm text-text-primary mr-2'>
            (پادکست)
            </span>
        </h2>
      <span className='flex items-center text-text-accent font-kalameh-base'>
              <button className='text-xs'>دیدن همه</button>
              <ChevronLeft />
          </span>
        </div>
      <MusicTemplate reverse={false} showHeader={false} />
      <button className='cursor-pointer'>
      <img className='px-4 rounded-2xl' src="/src/assets/banner/DJBanner.png" />
      </button>
      </div>

      {/* banner playlist carousel */}
      <PlaylistBanner/>
    
    </> 
  )
}

export default Home