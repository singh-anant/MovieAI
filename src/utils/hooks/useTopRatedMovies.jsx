import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addTopRatedMovies } from "../Slice/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  // Doing memoization
  const topRatedMoviesFromStore = useSelector(
    (store) => store.movies.topRatedMovies
  );
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
  };
  useEffect(() => {
    if (!topRatedMoviesFromStore) getTopRated();
  }, []);
};

export default useTopRatedMovies;
