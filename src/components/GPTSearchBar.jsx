import React, { useRef } from "react";
import openai from "../utils/openai";
import { SearchMovies } from "../utils/SearchMovies";

const GPTSearchBar = () => {
  const getSearchText = useRef(null);
  const handleSearchGPT = async () => {
    // console.log(getSearchText.current.value);
    const gptPrompt =
      "Act as movie recommendation system and suggest some movies for the query" +
      getSearchText.current.value +
      ".Give name of 10 movies only,separated by comma only.";

    // Make a api call to GPT to get movie results
    // We will get error because we are calling our api from frontend so its giving us a waring of api key leak
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptPrompt }],
      model: "gpt-3.5-turbo",
    });
    // console.log(gptResults?.choices[0]?.message?.content);
    /* we are just getting movie list and storing it inside array */
    const gptMoviesListInArray =
      gptResults?.choices[0]?.message?.content.split(",");
    /* 'One Piece: The Movie', ' One Piece Movie 2: Clockwork Island Adventure',...] */

    // Now we actually want to search each movie list in array... so we have to it to the function
    // We are sending every movie list to the search movie api and will receive result
    // But we will not get the result...
    // Because it is async operation we will receive array of promises only....😥😥
    const promiseArray = gptMoviesListInArray.map((movie) =>
      SearchMovies(movie)
    );
    /* [Promises,Promises,Promises,Promises] */

    // Getting data from promise array...
    // Promise.all() takes array of promises..It will wait for the all the promises to finish...

    const finalSearchMoviesResult = await Promise.all(promiseArray);
    console.log(finalSearchMoviesResult);
  };
  return (
    <div className="flex justify-center">
      <form className="p-6 m-6 w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="p-4 m-4 w-10/12 h-12 border-solid border-2 border-black"
          placeholder="Want some suggestion??"
          ref={getSearchText}
        />
        <button
          className="py-3 px-4 bg-blue-500 text-white"
          onClick={handleSearchGPT}
        >
          Suggest
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
