import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="flex justify-center">
      <form className="p-6 m-6 w-full">
        <input
          type="text"
          className="p-4 m-4 w-10/12 h-12 border-solid border-2 border-black"
          placeholder="Want some suggestion??"
        />
        <button className="py-3 px-4 bg-blue-500 text-white">Suggest</button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
