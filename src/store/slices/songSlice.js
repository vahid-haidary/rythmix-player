import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [],           
  currentSong: null,   
  currentIndex: 0,     
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    setSongs: (state, action) => {
      state.data = action.payload;
      if (action.payload.length > 0) {
        state.currentSong = action.payload[0]; 
        state.currentIndex = 0;               
      }
    },
    setNextsong: (state) => {
      if (state.data.length === 0) {
        return;
      }
      const nextIndex = (state.currentIndex + 1) % state.data.length;
      state.currentSong = state.data[nextIndex];
      state.currentIndex = nextIndex;
    },
    setPreviousSong: (state) => {
      if (state.data.length === 0) return;
      const prevIndex = (state.currentIndex - 1 + state.data.length) % state.data.length;
      state.currentSong = state.data[prevIndex];
      state.currentIndex = prevIndex;
    },
  },
});

export const { setSongs, setNextsong, setPreviousSong, setCurrentSong } = songSlice.actions;
export default songSlice.reducer;
