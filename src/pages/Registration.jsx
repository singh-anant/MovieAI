import React, { useRef, useState } from "react";
import Header from "../shared/Header";
import { NavLink } from "react-router-dom";
import { checkValidData } from "../utils/Validation";

const Registration = () => {
  // state variable for error message
  const [validMessage, setValidMessage] = useState();
  // const [isPasswordValid, setIsPasswordValid] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleRegisterButton = () => {
    // Validating the form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    const messageFromValidation = checkValidData(
      email.current.value,
      password.current.value
    );
    console.log(messageFromValidation);
    setValidMessage(messageFromValidation);
  };
  return (
    <div>
      <Header />
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 relative p-12 my-36 mx-auto right-0 left-0 bg-gray-200 rounded-lg"
        >
          <h1 className="font-bold text-4xl py-4 text-center">
            Welcome to MovieAI
          </h1>
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            a
            className=" w-full p-2 my-3"
          />

          <input
            ref={email}
            type="text"
            placeholder="Enter Email"
            a
            className=" w-full p-2 my-3"
          />
          <input
            ref={password}
            type="text"
            placeholder="Enter Password"
            className="w-full p-2 my-3"
          />
          <p className="text-red-500 font-semibold">{validMessage}</p>
          <button
            onClick={handleRegisterButton}
            className="text-lg  w-full p-2 my-2 bg-blue-600 text-white rounded-2xl "
          >
            Register
          </button>
          <p className="text-center">
            Already Registered?
            <NavLink to="/">Sign In</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
