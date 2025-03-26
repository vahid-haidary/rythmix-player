import axios from 'axios';
import { ChevronLeft, Share2, ArrowDownNarrowWide, EllipsisVertical, DownloadCloud, CircleCheckBig } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { setCurrentSong } from '../store/slices/songSlice';
import categoryData from '../data/categoryData';
import { AnimatePresence } from 'framer-motion';
import SortBottomSheet from '../components/SortBottomSheet';

function PlaylistSongPage() {
  const API_URL = import.meta.env.VITE_API_URL;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const {state} = location || {};
  const {cover, title} = state || {}; 

  const { categoryId } = useParams();
  const [data, setData] = useState([]);
  const [downloadedSong, setDownloadedSong] = useState([]);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [selectedText, setSelectedText] = useState('پیشنهاد ریتمیکس');
  const [category, setCategory] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/Songs`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });

    if (categoryId) {
      const foundCategory = categoryData.find(item => item.id === Number(categoryId));
      setCategory(foundCategory);
    }
  }, [API_URL, categoryId]);

  const itemHanlde = (song) => {
    dispatch(setCurrentSong(song));
    navigate("/player");
  };

  const downlodaHandle = (song) => {
    if (!song || !song.audio_url) return;

    const downloadedSongsFromStorage = JSON.parse(localStorage.getItem("downloadedSongs")) || [];

    const newDownload = {
      title: song.title,
      artist: song.artist,
      cover: song.cover_url
    };

    if (!downloadedSongsFromStorage.some(s => s.id === song.id)) {
      downloadedSongsFromStorage.push(newDownload);
      localStorage.setItem("downloadedSongs", JSON.stringify(downloadedSongsFromStorage));
    }

    const link = document.createElement("a");
    link.href = song.audio_url;
    link.download = `${song.title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadedSong(prev => [...prev, song.id]);
    }, 3000);
  };

  const sortHandle = () => {
    setShowBottomSheet(true);
  };

  const handleTextClick = (text) => {
    setSelectedText(text);
    setShowBottomSheet(false);
  };

  return (
    <div className="w-full h-full relative">
      <div className='relative flex justify-center'>
        {cover && (
          <img src={cover} alt={title} className='w-full h-1/2 max-h-[520px] opacity-45' />
        )}
        {category && (
          <img src={category.src} className='w-full h-1/2 opacity-45' alt={category.title} />
        )}
        <div className='absolute top-1/4 font-dana-bold text-5xl max-w-52 text-center'>
          <h2>{category ? category.title : 'پلی لیست'}</h2>
        {cover && (
          <h2 className='text-primary mt-4'>{title}</h2>
        )}
        </div>
        <ChevronLeft className='absolute top-0 left-0 mt-3 ml-3.5 cursor-pointer' size={40} onClick={() => navigate(category ? "/category" : "/")} />
      </div>
      {(category || cover) && (
  <div className='flex justify-between bg-background-accent w-[90%] mx-auto py-5 absolute top-115 left-0 right-0 rounded-xl p-2 px-5'>
    <div className='flex flex-col gap-2 justify-around'>
      <div className='font-dana-bold flex gap-2'>
        <span>{category?.insigth}</span>
        <span>بازدید کننده</span>
      </div>
      <div className='font-dana-bold flex gap-2'>
        <span>{category?.totalSongs}</span>
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
)}

      <div className='mt-16 px-4'>
        <div className='flex gap-1 items-center font-dana-base text-primary'>
          <ArrowDownNarrowWide size={30} className='text-primary' />
          <h4 onClick={sortHandle} className='cursor-pointer'>ترتیب نمایش:</h4>
          <h5 className='text-tiny text-text-primary'>{selectedText}</h5>
        </div>
      </div>
      <AnimatePresence>
        {showBottomSheet && (
          <SortBottomSheet setShowBottomSheet={setShowBottomSheet} handleTextClick={handleTextClick} />
        )}
      </AnimatePresence>
      <ul className='flex flex-col gap-1 w-full h-full font-dana-base px-2 mt-7'>
        {data.map((song, index) => (
          <li key={index} className='flex items-center justify-between pl-4 gap-7 p-2 rounded-md'>
            <div className='flex gap-3.5 items-center text-text-accent'>
              <EllipsisVertical className='cursor-pointer' />
              {downloadedSong.includes(song.id) ? (
                <CircleCheckBig color='green' />
              ) : (
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
  );
}

export default PlaylistSongPage;