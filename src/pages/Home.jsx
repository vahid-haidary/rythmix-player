import React from 'react'
import SwiperBaner from '../components/SwiperBaner'
import PlaylistCard from '../components/PlaylistCard'

function Home() {
  


  return (
    <>
    <div className='mt-6'>
      <SwiperBaner/>
    </div>
    <div>
      <PlaylistCard/>
    </div>
    </> 
  )
}

export default Home