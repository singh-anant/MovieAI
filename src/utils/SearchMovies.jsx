// Search Movie in Movie API
// This function will receive movie stored in string and will search that particular movie
import { API_OPTIONS } from "../utils/constants";

export const SearchMovies = async (movie) => {
  // console.log(movie);
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
    API_OPTIONS
  );
  const json = await data.json();
  // console.log(json.results);
  return json.results;
};
