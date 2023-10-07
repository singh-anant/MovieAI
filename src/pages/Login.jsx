import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { checkValidData } from "../utils/Validation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import AppBarHeader from "../shared/AppBarHeader";

const Login = () => {
  // state variable for error message
  const [validMessage, setValidMessage] = useState();
  // const [isPasswordValid, setIsPasswordValid] = useState(true);

  const email = useRef(null);
  const password = useRef(null);
  const handleLoginButton = () => {
    // Validating the form data

    // console.log(email.current.value);
    // console.log(password.current.value);

    const messageFromValidation = checkValidData(
      email.current.value,
      password.current.value
    );
    console.log(messageFromValidation);
    setValidMessage(messageFromValidation);
    if (messageFromValidation === null) {
      // Then we will do authentication
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          /* const user = userCredential.user; */
          // console.log(user);
        })
        .catch((error) => {
          /*  const errorCode = error.code;
          const errorMessage = error.message; */
          setValidMessage("Email and Password does not match");
        });
    }
  };
  return (
    <div>
      <AppBarHeader />
      <div>
        <form
          // We don't want to submit the form...
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 relative p-12 my-36 mx-auto right-0 left-0 bg-gray-200 rounded-lg"
        >
          <h1 className="font-bold text-4xl py-4 text-center">
            Welcome to MovieAI
          </h1>
          <input
            ref={email}
            type="text"
            placeholder="Enter Email"
            a
            className=" w-full p-2 my-3"
          />

          <input
            ref={password}
            type="password"
            placeholder="Enter Password"
            className="w-full p-2 my-3"
          />

          <p className="text-red-500 font-semibold">{validMessage}</p>
          <button
            onClick={handleLoginButton}
            className="text-lg  w-full p-2 my-2 bg-blue-600 text-white rounded-2xl "
          >
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
