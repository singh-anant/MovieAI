import React from "react";
import useGetMovieTrailerKey from "../utils/hooks/useGetMovieTrailerKey";

const VideoContainer = ({ title, overview, movieId }) => {
  //to get video links of movies which will play on background
  const trailerYoutube = useGetMovieTrailerKey(movieId);
  // console.log(trailer);

  return (
    <>
      <div className=" w-screen aspect-video pt-[21%] px-24 absolute bg-gradient-to-tr from-black">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
        <p className="py-6 text-lg w-1/2  text-white">{overview}</p>
      </div>
      {/* Video Player */}
      <div className="w-screen">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerYoutube}?&autoplay=1&mute=1&loop=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default VideoContainer;
