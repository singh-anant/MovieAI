// Search Movie in Movie API
// This function will receive movie stored in string and will search that particular movie
import { API_OPTIONS } from "../utils/constants";

export const SearchMovies = async (movie) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      { movie } +
      "&include_adult=false&page=1",
    API_OPTIONS
  );
  const json = await data.json();
  return json.results;
};
