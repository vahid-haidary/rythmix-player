// import React, { createContext, useContext, useRef, useState } from 'react';

// const PlayerContext = createContext();

// export const usePlayer = () => useContext(PlayerContext);

// const PlayerProvider = ({ children }) => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentSong, setCurrentSong] = useState(null);

//   const playSong = (song) => {
//     setCurrentSong(song);
//     if (audioRef.current) {
//       audioRef.current.src = song.audio_url;
//       audioRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <PlayerContext.Provider value={{ audioRef, isPlaying, currentSong, playSong, togglePlayPause }}>
//       <audio ref={audioRef} />
//       {children}
//     </PlayerContext.Provider>
//   );
// };

// export default PlayerProvider;