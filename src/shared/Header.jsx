import React from "react";
import Logo from "../assets/movie-ai-image_1.png";

const Header = () => {
  return (
    <div className="px-8 py-2 bg-inherit">
      <img className="w-44" src={Logo} alt="ai-logo" />
    </div>
  );
};

export default Header;
