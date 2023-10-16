import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  // console.log(posterPath);
  // If the poster part is not present
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-5">
      <img src={POSTER_URL + posterPath} alt="Card" />
    </div>
  );
};

export default MovieCard;
