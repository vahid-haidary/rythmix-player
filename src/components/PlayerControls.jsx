import React, { useEffect, useRef, useState } from 'react'
import {Share2,Shuffle,Repeat,EllipsisVertical,Timer,Heart,Download, Leaf} from "lucide-react"
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { formatTime } from '../utils/formatTime'

function PlayerControls() {

  const currentSong = useSelector((state) => state.songs.currentSong)
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (currentSong && audioRef.current) {
      const audio = audioRef.current;

      setCurrentTime(0)
      audio.currentTime = 0;

      const progressBar = document.querySelector('.progress-bar');
      if (progressBar) {
        progressBar.style.width = '0%';
      }
  
      const playAudio = async () => {
        try {
          if (audio.paused) {
            await audio.play();
            setIsPlaying(true);
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      const onLoadedData = () => setDuration(audio.duration);
      const onTimeUpdate = () => setCurrentTime(audio.currentTime);
  
      audio.addEventListener("loadeddata", onLoadedData);
      audio.addEventListener("timeupdate", onTimeUpdate);
  
      playAudio();
  
      return () => {
        audio.removeEventListener("loadeddata", onLoadedData);
        audio.removeEventListener("timeupdate", onTimeUpdate);
      };
    }
  }, [currentSong]);
  

  // Toogle Button Play And Pause
  const tooglePlayPause = () => {
    setIsPlaying((prev) => {
      if(prev){
        audioRef.current.pause()
      }else{
        audioRef.current.play()
      }
      return !prev
    })
  }

  // TimeLine Handle Click
  const trimHandle = (e) => {
    const progressBar = e.currentTarget;
    const offsetX = e.clientX - progressBar.getBoundingClientRect().left;
    const progressWidth = progressBar.clientWidth;
    const clickPercentage = (offsetX / progressWidth);
    const newTime = clickPercentage * duration;
    setCurrentTime(newTime)
    audioRef.current.currentTime= newTime

  }

    
  // SetError
  if (!currentSong) {
    return <h3 className="text-center mt-10 text-white">هیچ آهنگی انتخاب نشده است</h3>
  }

  return (
    <>
    <section className='w-full px-3 mx-auto bg-background-secondary h-screen'>

      {/* player controls */}
      <div className=' bg-background rounded-b-4xl px-7 h-[90%] '>

        {/* image & curve container */}
      <div className='flex flex-col items-center justify-center'>
        <button className=''>
          <img src="/src/assets/icons/curve.svg" alt="curve.svg" />
        </button>

          <div className='max-w-full min-h-[33.5vh] w-[34.25vh] shadow-lg shadow-gray-900 my-1.5 rounded-2xl'>
            <img className='rounded-2xl' src={currentSong.cover_url} alt={currentSong.title} />
          </div>
      </div>

          {/* title container */}
        <div className='flex flex-col self-start mt-[7.5vh] font-dana-base'>
            <div className='flex items-center gap-3'>
            <span className='block w-2 h-2 rounded-full bg-white' ></span>
            <span className='text-lg'>{currentSong.title}</span>
            </div>

            <div className='flex items-center gap-3'>
            <span className='block w-2 h-2 rounded-full bg-primary' ></span>
            <span className='text-primary text-tiny'>{currentSong.artist}</span>
            </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex justify-end items-center '>
            <div className='rounded-full bg-primary w-10 h-10 p-2'>
              <motion.div 
                  animate={{scale: [1, 0.95, 0.9, 0.95, 1]}}
                  transition={{duration:0.5, repeat:Infinity, ease:[0.4, 0, 0.2, 1]}}>
                <Share2 size={24} color="#000000" strokeWidth={1.5} />
              </motion.div>
            </div>
          </div>

            {/* controler player */}
          <div>

              {/* Timeline & Timer container */}
              <div className='flex flex-col gap-3 py-2 font-dana-bold relative '>
                  <div className='w-full h-2 relative cursor-pointer' onClick={e => trimHandle(e)}>
                  <div className='w-full h-0.5 bg-text-primary rounded-full relative '>
                  <span className='progress-bar bg-primary h-1 w-3 block rounded-full absolute left-0 top-0' style={{width:`${(currentTime / duration) * 100}%`}} ></span>
                  {/* Circle */}
                  <span className='bg-primary rounded-full h-4 w-4 absolute top-1/2 -translate-y-1/2 shadow shadow-gray-700'
                  style={{ left: `calc(${(currentTime / duration) * 100}% - 6px)` }}
                  >
                  </span>
                  </div>
                  </div>
                <div className='flex justify-between'>
                  <span>{formatTime(duration)}</span>
                  <span>{formatTime(currentTime)}</span>
                </div>
              </div>

            {/* controler Buttons */}
            <div className='flex justify-between items-center mt-5'>
             <Shuffle size={20} color="#ffffff" strokeWidth={1.75} />
              <img className='h-7 w-7' src="/src/assets/icons/next.svg" alt="" />
              <audio ref={audioRef} src={currentSong.audio_url} className='w-full'></audio>

              <button onClick={tooglePlayPause} >
                {
                  isPlaying ? 
                  <img className='w-[70px] h-[70px]' src="/src/assets/icons/pause.svg" alt="pause" />
                  :(
                    (<img className='w-[70px] h-[70px]'  src="/src/assets/icons/play.svg" alt="play" />)
                  )
                }
              </button>

              <img className='h-7 w-7' src="/src/assets/icons/previous.svg" alt="" />
             <Repeat size={20} color="#ffffff" strokeWidth={1.75} />
            </div>
          </div>
        </div>
        </div>

      {/* buttons bottom */}
      <div className='h-[10%] flex justify-between items-center pt-5 pb-1 px-7 text-text-primary  '>
        <button className='focus:text-primary'>
        <EllipsisVertical size={28} />    
        </button>

        <button className='focus:text-primary'>
        <Heart size={28} strokeWidth={2.5} />
        </button>

        <div className='flex flex-col items-center text-sm'>
          <span className='text-white font-kalameh-bold'>متن</span>
          <span className='font-kalameh-base'>هم‌زمان</span>
        </div>

          <button className='focus:text-primary'>
          <Timer size={28} />
          </button>
          
          <button className='focus:text-primary'>
           <Download size={28}  strokeWidth={1.75} />
          </button>
      </div>

    </section>
    </>
  )
}

export default PlayerControls


