import { useEffect, useState } from "react";
import { API_OPTIONS } from "../constants";

const useGetMovieTrailerKey = (movieId) => {
  const [trailer, setTrailer] = useState(null);
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    // now we will filter the trailer to get the link
    const filterTrailerFromVideos = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    // A movie can have multiple trailer so we will use first
    // Trailer has youtube video key which we will be using
    // console.log(trailer[0]);
    setTrailer(filterTrailerFromVideos[0]);
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
  return trailer?.key;
};

export default useGetMovieTrailerKey;
