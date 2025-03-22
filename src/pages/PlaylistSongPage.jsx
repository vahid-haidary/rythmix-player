import axios from 'axios'
import { ChevronLeft, Share2, ArrowDownNarrowWide, EllipsisVertical, DownloadCloud,CircleCheckBig } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentSong } from '../store/slices/songSlice'

function PlaylistSongPage() {
  const API_URL = import.meta.env.VITE_API_URL

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [downloadedSong, setDownloadedSong] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/Songs`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [API_URL])

  const itemHanlde = (song) => {
    dispatch(setCurrentSong(song))
    navigate("/player")
  }

  const downlodaHandle = (song) => {
    if (!song || !song.audio_url) return

    const downloadedSongsFromStorage = JSON.parse(localStorage.getItem("downloadedSongs")) || []

    const newDownload = {
      title: song.title,
      artist: song.artist,
      cover: song.cover_url
    }

    if (!downloadedSongsFromStorage.some(s => s.id === song.id)) {
      downloadedSongsFromStorage.push(newDownload)
      localStorage.setItem("downloadedSongs", JSON.stringify(downloadedSongsFromStorage))
    }
    
    const link = document.createElement("a")
    link.href = song.audio_url
    link.download = `${song.title}.mp3`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setTimeout(() => {
      setDownloadedSong(prev => [...prev, song.id])
    }, 3000);
  }

  return (
    <div className='w-full h-full relative'>
      <div className='relative flex justify-center'>
        <img src="/src/assets/playlistCard/arabiclist.jpg" className='w-full h-1/2 opacity-45' alt="" />
        <div className='absolute top-1/4 font-dana-bold text-5xl max-w-45 text-center'>
          <h2>ترندهای اینستاگرام</h2>
        </div>
        <ChevronLeft className='absolute top-0 left-0 mt-3 ml-3.5 cursor-pointer' size={40} onClick={() => navigate("/category")} />
      </div>
      <div className='flex justify-between bg-background-accent w-[90%] mx-auto py-5 absolute top-115 left-0 right-0 rounded-xl p-2 px-5'>
        <div className='flex flex-col gap-2 justify-around'>
          <div className='font-dana-bold flex gap-2'>
            <span>12.8m</span>
            <span>بازدید کننده</span>
          </div>
          <div className='font-dana-bold flex gap-2'>
            <span>12</span>
            <span>آهنگ</span>
          </div>
        </div>
        <div className='flex justify-between gap-3 items-center font-dana-bold'>
          <span className='bg-primary rounded-2xl p-2 px-4 text-black'>دنبال کردن</span>
          <span className='flex justify-center items-center rounded-full bg-primary w-12 h-12 p-2'>
            <Share2 size={24} color="#000000" strokeWidth={1.5} />
          </span>
        </div>
      </div>

      <div className='mt-16 px-4'>
        <div className='flex gap-1 items-center font-dana-base text-primary'>
          <ArrowDownNarrowWide size={30} className='text-primary' />
          <h4>ترتیب نمایش:</h4>
          <h5 className='text-tiny text-text-primary'>پیشنهاد ریتمیکس</h5>
        </div>
      </div>
      <ul className='flex flex-col gap-1 w-full h-full font-dana-base px-2 mt-7'>
        {data.map((song, index) => (
          <li key={index} className='flex items-center justify-between pl-4 gap-7 p-2 rounded-md'>
            <div className='flex gap-3.5 items-center text-text-accent'>
              <EllipsisVertical className='cursor-pointer' />
              {downloadedSong.includes(song.id) ? (
                <CircleCheckBig color='green' />
              ):(
                <DownloadCloud className='cursor-pointer active:text-primary' onClick={() => downlodaHandle(song)} />
              )}
            </div>
            <div className='flex gap-3' onClick={() => itemHanlde(song)}>
              <div className='flex flex-col justify-center text-center items-center'>
                <h3 className='text-sm font-medium'>{song.title}</h3>
                <p className='text-tiny text-gray-500'>{song.artist}</p>
              </div>
              <img src={song.cover_url} alt={data.title} className='w-16 h-16 rounded' />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlaylistSongPage