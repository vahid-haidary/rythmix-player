import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchSongs = createAsyncThunk("songs/fetchSongs", async () => {
  const response = await axios.get(`${API_URL}/Songs`);
  return response.data;
});

const initialState= {
    data: [],
    loading: false,
    error: null,
    currentSong: null
  }

const songsSlice = createSlice({
  name: "songs",
  initialState,   
  reducers: {
    setCurrentSong: (state,action) => {
      state.currentSong = action.payload
    }
  }, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const {setCurrentSong} = songsSlice.actions;
export default songsSlice.reducer;
