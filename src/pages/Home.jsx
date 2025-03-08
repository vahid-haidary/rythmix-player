import React from 'react'
import SwiperBaner from '../components/SwiperBaner'
import PlaylistCard from '../components/PlaylistCard'
import InsightCard1403 from '../components/InsightCard1403'

function Home() {
  


  return (
    <>
    <div className='mt-6'>
      <SwiperBaner/>
    </div>
    <div>
      <PlaylistCard/>
      <InsightCard1403/>
    </div>
    </> 
  )
}

export default Home