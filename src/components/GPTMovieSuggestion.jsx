import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  // Here we are going to show all the movies
  const gptMoviesFromStore = useSelector((store) => store.gpt);
  // console.log(gptMoviesFromStore);

  if (!gptMoviesFromStore) return null;

  const { gptSearchMovies, gptSearchResult } = gptMoviesFromStore;
  // console.log(gptSearchMovies);
  return (
    <div className="p-4 m-4">
      {gptSearchResult.map((movies, index) => (
        <MovieList
          key={movies}
          title={movies}
          movieObj={gptSearchMovies[index]}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestion;
