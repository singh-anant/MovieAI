import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieObj }) => {
  console.log(movieObj);
  return (
    <div className="p-2">
      <h1 className="text-4xl py-4 text-blue-500">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {/* Rendering all movies */}
          {movieObj?.map((movie) => (
            <MovieCard posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
