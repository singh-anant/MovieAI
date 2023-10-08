import React from "react";
import useUpcomingMovies from "../utils/hooks/useUpcomingMovies";
import useTopRatedMovies from "../utils/hooks/useTopRatedMovies";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const moviesFromStore = useSelector((store) => store.movies);
  return (
    <div>
      {/* 
    ~ Now Playing
    ~ Popular
    ~ Top Rated
    ~ Upcoming
    */}

      <MovieList
        title={"Now Playing"}
        movieObj={moviesFromStore.nowPlayingMovies}
      />
      <MovieList
        title={"Popular Movies"}
        movieObj={moviesFromStore.popularMovies}
      />
      <MovieList
        title={"Top Rated Movies"}
        movieObj={moviesFromStore.topRatedMovies}
      />
      <MovieList
        title={"Upcoming Movies"}
        movieObj={moviesFromStore.upcomingMovies}
      />
    </div>
  );
};

export default SecondaryContainer;
