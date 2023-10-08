import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  // console.log(posterPath);
  return (
    <div className="w-48 pr-5">
      <img src={POSTER_URL + posterPath} alt="Card" />
    </div>
  );
};

export default MovieCard;
