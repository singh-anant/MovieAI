import React, { useEffect } from "react";
import AppBarHeader from "../shared/AppBarHeader";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";

const Suggestion = () => {
  useNowPlayingMovies();

  return (
    <div>
      <AppBarHeader />
      {/* 
     -MainContainer
      ~VideoBackground
      ~VideoTitle
     -SecondaryContainer
      ~MovieList
        ~Cards
     */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Suggestion;
