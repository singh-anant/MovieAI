import React from "react";
import Header from "../shared/Header";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <form
          action=""
          className="w-3/12 relative p-12 my-36 mx-auto right-0 left-0 bg-gray-200 rounded-lg"
        >
          <h1 className="font-bold text-4xl py-4 text-center">
            Welcome to MovieAI
          </h1>
          <input
            type="text"
            placeholder="Enter Email"
            a
            className=" w-full p-2 my-3"
          />
          <input
            type="text"
            placeholder="Enter Password"
            className="w-full p-2 my-3"
          />
          <button className="text-lg  w-full p-2 my-2 bg-blue-600 text-white rounded-2xl ">
            Sign In
          </button>
          <p className="text-center">
            New User? <NavLink to="/register">Sign Up</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
