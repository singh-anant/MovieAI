import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addPopularMovies } from "../Slice/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMoviesFromStore = useSelector(
    (store) => store.movies.popularMovies
  );
  const getPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    if (!popularMoviesFromStore) getPopular();
  }, []);
};

export default usePopularMovies;
