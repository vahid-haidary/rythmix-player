import React, { useEffect, useState } from 'react'
import { EllipsisVertical,CircleCheckBig } from 'lucide-react';
import DownloadsBottomSheet from '../components/DownloadsBottomSheet';

function Downloads() {
  const [downloadedSongs, setDownloadedSongs] = useState([]);
  const [showBottomSheet, setShowBottomSheet] = useState(false)
  const [ selectedSong, setSelectedSong] = useState(null)
  

  const bottomSheetHanlde = (song) => {
    setSelectedSong(song)
    setShowBottomSheet(true)
  }

  useEffect(() => {
    const storedSongs = JSON.parse(localStorage.getItem('downloadedSongs')) || [];
    setDownloadedSongs(storedSongs);
  }, []);

  return (
    <section className='w-full h-screen flex justify-center items-center relative'>
      {downloadedSongs.length === 0 ? (
              <div className='flex flex-col items-center'>
              <img className='w-24 h-24 ' src="/src/assets/icons/downloadsIcon.svg" alt="" />
              <span className='font-dana-reg text-text-accent'>هنوز آهنگی دانلود نکرده اید</span>
              </div>
      ):(
        <ul className='w-full h-full font-dana-base px-2 mt-7'>
          {downloadedSongs.map((song,index) => 
            (
              <li key={index} className='flex items-center justify-between pl-4 gap-4 p-2 rounded-md shadow-2xl' >
                <div className='flex gap-3.5 items-center'>
                <EllipsisVertical onClick={() => bottomSheetHanlde(song)} className='cursor-pointer' />
                <CircleCheckBig color='green' />
                </div>
                <div className='flex gap-1'>
                  <div className='flex flex-col justify-center text-center items-center'>
                  <h3 className='text-sm font-medium'>{song.title}</h3>
                  <p className='text-tiny text-gray-500'>{song.artist}</p>
                  </div>
                    <img src={song.cover} alt={song.title} className='w-16 h-16 rounded' />
                </div>
              </li>
            )
          )}
        </ul>
      )}
      <div className='absolute left-0 right-0 top-1/4'>

      {showBottomSheet &&
        <DownloadsBottomSheet 
      setShowBottomSheet={setShowBottomSheet}
      selectedSong={selectedSong}
      setDownloadedSongs={setDownloadedSongs}
       />}

      </div>
    </section>
  )
}

export default Downloads