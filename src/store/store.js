import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./slices/songSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
});

export default store;
