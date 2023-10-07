import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { checkValidData } from "../utils/Validation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import AppBarHeader from "../shared/AppBarHeader";

const Registration = () => {
  // state variable for error message
  const [validMessage, setValidMessage] = useState();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleRegisterButton = () => {
    // Validating the form data
    const messageFromValidation = checkValidData(
      email.current.value,
      password.current.value
    );
    // console.log(messageFromValidation);
    setValidMessage(messageFromValidation);

    if (messageFromValidation === null) {
      // Then  we will create new User
      //  Whenever we need auth we will just import it from firebase.js
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // Firebase will give us access token,uid and much more...
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!!
            })
            .catch((error) => {
              // An error occurred
              // ...
              setValidMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          /*  const errorCode = error.code;
          const errorMessage = error.message; */
          setValidMessage("Oops!!Some error occurred");
          // ..
        });
    }
  };
  return (
    <div>
      <AppBarHeader />
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
            type="password"
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
