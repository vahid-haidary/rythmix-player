import { ChevronLeft, Earth } from 'lucide-react'
import React, { useCallback, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setCurrentSong,setSongs } from '../store/slices/songSlice'

function  MusicTemplate({titr,icon,reverse,showHeader}) {
  const songs = useSelector(state => state.songs.data);


    const API_URL = import.meta.env.VITE_API_URL
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
      axios.get(`${API_URL}/Songs`)
        .then((response) => {
          dispatch(setSongs(response.data));
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching songs:", error);
          setError(error.message);
          setLoading(false);
        });
    }, [API_URL, dispatch]);
    

    const handleSongClick = useCallback((song) => {
      dispatch(setCurrentSong(song))
      navigate('/player')
    },[dispatch,navigate])

    // error handle
    if(error === "Network Error"){ return <div className='flex justify-center gap-2'><Earth size={30}  color='red ' />خطا در شبکه</div>}else{
      (<h3 className='text-center text-2xl font-bold'>خطایی رخ داده است</h3>)
    }

  return (
    <div className='w-full mt-4 '>
        {showHeader && (
                    <div className='w-[97%] h-fit flex justify-between items-center bg-background-accent px-2 py-1.5 mx-auto rounded-2xl font-kalameh-base' >
                    <span className='flex items-center gap-2'>
                        <img className='w-5' src={`/assets/icons/${icon}.png`} alt="iran" />
                        <h3 className='text-base text-text-primary'>{titr}</h3>
                    </span>
                    <span className='flex items-center text-text-accent'>
                        <Link to="/playlist" className='text-xs '>دیدن همه</Link>
                        <ChevronLeft/>
                    </span>
                </div>
        )}
        {/* musics */}
        <div className='pr-3'>
            <Swiper
            modules={[Navigation]}
            spaceBetween={9}
            slidesPerView={4.5}
            breakpoints={{
              520: {
                slidesPerView: 4.5,
              },
              360: {
                slidesPerView: 2.5  ,
              },
              0: {
                slidesPerView: 2.5,
              },
              
            }}
            className='**:rounded-md mt-3'
        >
            {loading ?
              [...Array(5)].map((_,index)=> (
                        <SwiperSlide key={index} className="flex flex-col animate-pulse">
                        <div className="w-24 h-24 bg-gray-500 rounded-md mb-2"></div>
                        <div className="h-3 w-20 bg-gray-500 rounded mt-1"></div>
                        <div className="h-2 w-16 bg-gray-500 rounded mt-1"></div>
                        </SwiperSlide>
            )):
              (reverse ? [...songs].reverse() : songs).map((item) => (
                        <SwiperSlide className='flex flex-col' key={item.id} onClick={() => handleSongClick(item)}>
                            <img className='mb-2' src={item.cover_url} alt={item.id} />
                            <div className='flex flex-col items-center justify-center max-w-[100px] '>
                                <span className='font-dana-base text-tiny text-text-secondary overflow-hidden text-center'>{item.title}</span>
                                <span className='overflow-hidden font-dana-base text-[10px] text-text-primary'>{item.artist}</span>
                            </div>
                        </SwiperSlide>
                    ))
            }
        
        </Swiper>
        </div>
    </div>
  )
}

export default MusicTemplate