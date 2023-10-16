import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addUpcomingMovies } from "../Slice/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingFromStore = useSelector((store) => store.movies.upcomingMovies);
  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
  };
  useEffect(() => {
    if (!upcomingFromStore) getUpcoming();
  }, []);
};

export default useUpcomingMovies;
