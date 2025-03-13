import React, { useEffect, useState } from 'react'
import {
  SwiperBaner,
  PlaylistCard,
  InsightCard1403,
  MusicTemplate,
  PlaylistBanner,
  SingerList,
  PlaylistBannerSec,
  Shimmer
} from '../components';
import {ChevronLeft} from "lucide-react"
import DownloadBanner from '/src/assets/banner/DownloadBanner.png'

function Home() {
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false)
    },3000)
    return () => clearTimeout(time)
  },[])

  return (  
    <>
      {/* Header Banner */}
      <div className='mt-6'>
        {loading ? <Shimmer className="w-[90%] mx-auto h-[200px]" /> : <SwiperBaner />}
      </div>

      {/* Playlist-music */}
      {loading ? 
        <div className='flex flex-col gap-1 my-4'>
          <Shimmer className="w-[97%] h-[70px] mx-auto " />
          <Shimmer className="w-[97%] h-[70px] mx-auto " />
        </div>
       : <PlaylistCard />}

      {/* insight user banner */}
      {loading ? <Shimmer className="w-[85%] h-[200px] mx-auto my-4" /> : <InsightCard1403 />}

      {/* Newest template */}
      <div className='flex flex-col'>
        <h2 className='font-kalameh-extra text-title tracking-wide pr-4'>
          جدیدترین ها 
          <span className='font-kalameh-base text-sm text-text-primary mr-2'>
            (ویژه)
          </span>
        </h2>

        {loading ? (
        <div className="flex flex-col gap-4">
          <Shimmer className="w-[97%] mx-auto h-[120px]" />
          <Shimmer className="w-[97%] mx-auto h-[120px]" />
        </div>
      ) : (
        <>
          <MusicTemplate titr="ایران" icon="iran" reverse={false} showHeader={true} showSubHeader={true}/>
          <MusicTemplate titr="جهان" icon="world" reverse={true} showHeader={true} showSubHeader={true} />
        </>
      )}
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
        {loading ? <Shimmer className="w-[95%] mx-auto h-[180px]" /> : <MusicTemplate reverse={false} showHeader={false} />}
        <button className='cursor-pointer'>
          {loading ? <Shimmer className="w-[93%] mx-auto h-[100px] rounded-2xl" /> : <img className='px-4 rounded-2xl' src="/src/assets/banner/DJBanner.png" />}
        </button>
      </div>

      {/* banner playlist carousel */}
      {loading ? <Shimmer className="w-[80%] mx-auto h-[120px]" /> : <PlaylistBanner />}

      {/* artists banner */}
      <div className='flex flex-col mt-2 pb-8 bg-background-secondary'>
        <h2 className='font-kalameh-extra text-title pr-4 pt-2'>
          خوانندگان 
          <span className='font-kalameh-base text-sm text-text-primary mr-2'>
            (محبوب ترین ها)
          </span>
        </h2>
        <div className='flex flex-col gap-5'>
          {loading ? <Shimmer className="w-[95%] mx-auto h-[150px]" /> : <SingerList icon="iran" titr="ایران" showHeader={true} reverse={false} />}
          {loading ? <Shimmer className="w-[95%] mx-auto h-[150px]" /> : <SingerList icon="world" titr="جهان" showHeader={true} reverse={true} />}
        </div>
      </div>

      {/* Banner Carousel Second */}
      {loading ? <Shimmer className="w-[80%] mx-auto h-[120px]" /> : <PlaylistBannerSec />}

      {/* popular */}
      <div className='flex flex-col my-4'>
        <h2 className='font-kalameh-extra text-title tracking-wide pr-4'>
          محبوب ترین ها 
        </h2>
        {loading ? ( 
        <div className='flex flex-col gap-2 mt-7'>
          <Shimmer className="w-[95%] mx-auto h-[120px]"/>
          <Shimmer className="w-[95%] mx-auto h-[120px]"/>
        </div>  ) : (
          <>
            <MusicTemplate titr="ایران" icon="iran" reverse={false} showHeader={true} showSubHeader={true} />
            <MusicTemplate titr="جهان" icon="world" reverse={true} showHeader={true} showSubHeader={true} />
          </>
      )}
      </div>

      {/* Download Banner */}
      <div className='w-[80%] mx-auto mt-7 mb-4'>
        <div className='cursor-pointer'>
          {loading ? <Shimmer className="w-full mx-auto h-[190px] rounded-2xl" /> : <img className='rounded-2xl' src={DownloadBanner} alt="DownloadBanner" />}
        </div>
      </div>
    
    </> 
  );
}

export default Home