import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import movieReducer from "./Slice/movieSlice";
import gptReducer from "./Slice/gptSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
  },
});

export default store;
