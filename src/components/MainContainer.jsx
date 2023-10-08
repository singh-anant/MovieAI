import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/Store";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //   Now we need to take one movie to display in the video
  //   This is early return
  if (movies === null) return;
  const movieRunningAsVideo = movies?.results[0];
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
