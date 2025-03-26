import React from 'react'
import { useNavigate } from 'react-router-dom';

const playlists = [
  {
    title: "موسیقی جهان",
    images: [
      "https://m-img.melodify.me/new_data/images/collection-categories/7077350/conversions/3-thumb-500.jpg",
      "https://m-img.melodify.me/new_data/images/collection-categories/7077346/conversions/2-thumb-500.jpg",
      "https://m-img.melodify.me/new_data/images/collection-categories/7077334/conversions/1-thumb-500.jpg",
      "https://m-img.melodify.me/new_data/images/collection-categories/7077362/conversions/34-thumb-500.jpg",
    ],
  },
  {
    title: "موسیقی ایران",
    images: [
      "https://m-img.melodify.me/new_data/images/collection-categories/7077350/conversions/3-thumb-500.jpg",
      "https://m-img.melodify.me/new_data/images/collection-categories/7077346/conversions/2-thumb-500.jpg",
      "https://m-img.melodify.me/new_data/images/collection-categories/7077334/conversions/1-thumb-500.jpg",
      "https://m-img.melodify.me/new_data/images/collection-categories/7077362/conversions/34-thumb-500.jpg",
    ],
  },
];

function PlaylistSection({ title, images }) {

  const navigate = useNavigate()
  function handleCategoryClick() {
    navigate('/category')
  }

  return (
    <div className='my-4'>
      <span className='text-text-accent'>{title}</span>
      <div className='grid grid-cols-2 grid-rows-2 gap-1.5 *:rounded-xl *:cursor-pointer mt-3'
      onClick={handleCategoryClick}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`تصویر ${title} ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

function Playlist() {
  return (
    <section className='font-dana-reg mt-3 px-4'>
      {playlists.map((playlist, index) => (
        <PlaylistSection key={index} title={playlist.title} images={playlist.images} />
      ))}
    </section>
  );
}

export default Playlist;
