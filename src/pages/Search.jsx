import { SearchIcon, CircleX } from 'lucide-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentSong } from '../store/slices/songSlice';

function Search() {
  const navigate = useNavigate()
  const disptach = useDispatch()

  const { songs = [] } = useSelector(state => ({
    songs: state.songs.data || [],
  }));

  const [searchText, setSearchText] = useState("");
  const [filteredSongs, setFilteredSong] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearchPerformed(true);
  
    if (searchText.trim() === "") {
      setFilteredSong([]);
      return;
    }

    const result = songs.filter(song =>
      (song.artist?.toLowerCase().includes(searchText.toLowerCase())) ||
      (song.title?.toLowerCase().includes(searchText.toLowerCase()))
    );
    
    setFilteredSong(result);
  };
  
  const itemHanlde = (song) => {
    disptach(setCurrentSong(song))
    navigate("/player")
  }

  return (
    <>
      <div className='relative h-full scroll-auto'>
        <form className='px-3 my-4 h-12 relative'>

          {searchText === "" ? (
            <SearchIcon size={32} className='text-primary absolute right-7 bottom-2.5' />
          ) : (
            <CircleX size={32}
              className="text-white absolute right-7 bottom-2.5"
              onClick={() => {
                setSearchText(""); 
                setFilteredSong([]);
                setIsSearchPerformed(false); 
              }} />
          )}
          <input
            type="search"
            className='w-full h-full bg-background-accent rounded-4xl text-base font-dana-base pr-16 outline-none'
            placeholder='جست وجو کنید...'
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button type='submit' className={`bg-primary px-5 py-[10px] cursor-pointer font-dana-bold text-sm text-background-accent rounded-4xl absolute left-4 top-1 transition-opacity duration-300 
            ${searchText === "" ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`} onClick={handleSearch}>
            جستجو
          </button>
        </form>

        {(searchText === "" && !isSearchPerformed) && (
          <d  iv className='flex flex-col absolute top-[160px] right-[210px] max-xs:right-[130px]'>
            <img className='w-28 h-28' src="/src/assets/icons/cactus.svg" alt="" />
            <SearchIcon className='text-text-primary absolute top-[57px]' size={48} />
            <span className='font-dana-base mx-auto text-text-primary'>عبارتی وجود ندارد</span>
          </d>
        )}

        {searchText !== "" && (
          <div className='flex flex-col gap-2 *:bg-background-accent *:rounded-lg w-[95%] mx-auto left-0 right-0 rounded-lg shadow-lg mt-2 font-dana-base' >
            {filteredSongs.length > 0 ? (
              filteredSongs.map(song => (
                <div key={song.id} 
                className='flex justify-end gap-4 items-center p-2 text-end text-white cursor-pointer'
                onClick={() => itemHanlde(song)}
                >

                  <div className='flex flex-col' >
                  <span >{song.title}</span>
                  <span className='text-text-accent text-tiny ' >{song.artist}</span>
                  </div>

                  <div>
                    <img src={song.cover_url} className='w-16 h-16 rounded-full' alt={song.title} />
                  </div>
                </div>
              ))
            ) : (
              <div className='flex flex-col !bg-background absolute top-[160px] right-[210px] max-xs:right-[130px]'>
                <img className='w-28 h-28' src="/src/assets/icons/cactus.svg" alt="" />
                <SearchIcon className='text-text-primary absolute top-[57px]' size={48} />
                <span className='font-dana-base mx-auto text-text-primary'>عبارتی وجود ندارد</span>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
