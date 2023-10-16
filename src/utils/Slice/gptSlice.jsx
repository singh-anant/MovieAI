import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptSearchResult: [],
    // Array of movies which we get from searching the movies....

    gptSearchMovies: {},
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTSearchResult: (state, action) => {
      state.gptSearchResult = action.payload;
    },
    addGPTMovieResult: (state, action) => {
      state.gptSearchMovies = action.payload;
    },
  },
});

export const { toggleGPTSearchView, addGPTMovieResult, addGPTSearchResult } =
  gptSlice.actions;
export default gptSlice.reducer;
