import React, { useEffect, useRef, useState } from 'react'
import {Share2,Shuffle,Repeat,EllipsisVertical,Timer,Heart,Download, Leaf} from "lucide-react"
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { formatTime } from '../utils/formatTime'
import { useNavigate } from 'react-router-dom'
import { setNextsong, setPreviousSong} from '../store/slices/songSlice'
import TimerBottomSheet from './TimerBottomSheet'


function PlayerControls() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { currentSong, songs = [] } = useSelector(state => ({
    currentSong: state.songs.currentSong,
    songs: state.songs.data || [],
  }));
    const isLastSong = currentSong && songs.length > 0 && songs.indexOf(currentSong) === songs.length - 1;

  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isRepeating, setIsRepeating] = useState(false)

  const [isShuffle, setIsShuffle] = useState(false)
  const [shuffledSong, setShuffledSong] = useState([])

  const [showTimer, setShowTimer] = useState(false)

  
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

    }else{
      navigate("/")
    }
  }, [currentSong,navigate]);
  

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

  

  //Next song Btn
  const handleNext = () => {
    if (isShuffle && shuffledSong.length > 0) {
      const currentIndex = shuffledSong.findIndex(song => song.id === currentSong.id);
      if (currentIndex < shuffledSong.length - 1) {
        dispatch(setNextsong(shuffledSong[currentIndex + 1]));
      } else {
        dispatch(setNextsong(shuffledSong[0])); 
      }
    } else {
      if (!isLastSong) {
        dispatch(setNextsong());
      }
    }
  };
  

  

  //previous song Btn
  const handlePrevious = () => {
    if (isShuffle && shuffledSong.length > 0) {
      const currentIndex = shuffledSong.findIndex(song => song.id === currentSong.id);
      if (currentIndex > 0) {
        dispatch(setPreviousSong(shuffledSong[currentIndex - 1]));
      } else {
        dispatch(setPreviousSong(shuffledSong[shuffledSong.length - 1])); 
      }
    } else {
      dispatch(setPreviousSong());
    }
  };
  
  

  // Repeating btn
  const toggleRepeat = () => {
    setIsRepeating((prev) => (!prev))
  }

  const handleEnded = () => {
    if(isRepeating){
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }else{
      dispatch(setNextsong())
    }
  }

//shuffeleing
  const shuffelingHandle = () => {
    setIsShuffle(prev => {
      if (!prev) {
        let shuffled = [...songs].sort(() => Math.random() - 0.5);
        setShuffledSong(shuffled);
      } else {
        setShuffledSong([]); 
      }
      return !prev;
    });
  };

  //Timer Bottom Sheet
  const TimerHandle = () => {
    setShowTimer((prev) => !prev)
  }
  

    
  // SetError
  if (!currentSong) {
    return <h3 className="text-center mt-10 text-white">هیچ آهنگی انتخاب نشده است</h3>
  }

  

  return (
    <>
    <section className='w-full relative px-3 mx-auto bg-background-secondary h-screen'>

      {/* player controls */}
      <div className=' bg-background rounded-b-4xl px-7 h-[90%] '>

        {/* image & curve container */}
      <div className='flex flex-col items-center justify-center'>
        <button onClick={() => {navigate("/")}}>
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
            <div className='flex justify-between items-center '>
             <Shuffle size={20}  strokeWidth={1.75} className={`${isShuffle? "text-primary" : "text-white"} cursor-pointer`} onClick={shuffelingHandle}  />

              <img className={`h-8 w-8 cursor-pointer ${isLastSong ? "opacity-20 cursor-not-allowed" : ""}`} src="/src/assets/icons/next.svg" onClick={handleNext} alt="next" />

              <audio ref={audioRef} src={currentSong.audio_url} onEnded={handleEnded} className='w-full'></audio>

              <button onClick={tooglePlayPause} >
                {
                  isPlaying ? 
                  <img className='w-[80px] h-[80px]' src="/src/assets/icons/pause.svg" alt="pause" />
                  :(
                    (<img className='w-[80px] h-[80px]'  src="/src/assets/icons/play.svg" alt="play" />)
                  )
                }
              </button>

              <img className='h-8 w-8 cursor-pointer' src="/src/assets/icons/previous.svg" onClick={handlePrevious}  alt="previous" />

             <Repeat size={20} className={`${isRepeating ? "text-primary" : "text-white"} cursor-pointer`} strokeWidth={1.75} onClick={toggleRepeat} />

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

          <button className='focus:text-primary' onClickCapture={TimerHandle}>
          <Timer size={28} />
          </button>
              <div
               className='absolute bottom-0 left-0 right-0 '>
                <AnimatePresence>
                {showTimer && 
            <TimerBottomSheet setShowTimer={setShowTimer} />}
            </AnimatePresence>
              </div>

          <button className='focus:text-primary'>
           <Download size={28}  strokeWidth={1.75} />
          </button>
      </div>

    </section>
    </> 
  )
}

export default PlayerControls


