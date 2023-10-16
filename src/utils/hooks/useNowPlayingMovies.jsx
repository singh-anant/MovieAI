import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addNowPlayingMovies } from "../Slice/movieSlice";

const useNowPlayingMovies = () => {
  // Here we are fetching movies and storing it inside our movies slice
  const dispatch = useDispatch();
  const nowPlayingMoviesFromStore = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    // Adding movies inside Store
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    if (!nowPlayingMoviesFromStore) getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
