import React from "react";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //   Now we need to take one movie to display in the video
  //   This is early return
  if (movies === null) return;
  // var random = Math.floor(Math.random() * (0 - 9 + 1) + 0);
  const movieRunningAsVideo = movies[4];
  // console.log(movieRunningAsVideo);
  return (
    <div>
      <VideoContainer
        title={movieRunningAsVideo?.title}
        overview={movieRunningAsVideo?.overview}
        movieId={movieRunningAsVideo?.id}
      />
    </div>
  );
};

export default MainContainer;
