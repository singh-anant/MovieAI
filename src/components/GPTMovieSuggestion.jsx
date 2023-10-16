import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { ShimmerFeaturedGallery } from "react-shimmer-effects";

const GPTMovieSuggestion = () => {
  // Here we are going to show all the movies
  const gptMoviesFromStore = useSelector((store) => store.gpt);
  // console.log(gptMoviesFromStore);
  /* 
  if (!gptMoviesFromStore) return null; */

  const { gptSearchMovies, gptSearchResult } = gptMoviesFromStore;
  // console.log(gptSearchMovies);

  return !gptMoviesFromStore ? (
    <ShimmerFeaturedGallery row={2} col={2} card frameHeight={600} />
  ) : (
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
