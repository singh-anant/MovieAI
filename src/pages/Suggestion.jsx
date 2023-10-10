import React, { useEffect } from "react";
import AppBarHeader from "../shared/AppBarHeader";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import SearchGPT from "../pages/SearchGPT";
import { useSelector } from "react-redux";

const Suggestion = () => {
  // So when to display searchGPT menu ~when toggleSearchGPT===true
  // So we need to read it from the store using useSelector
  const showSearchGPT = useSelector((store) => store.gpt.showGPTSearch);

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
      {showSearchGPT ? (
        <SearchGPT />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Suggestion;
