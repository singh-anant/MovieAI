import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import AppBarHeader from "../shared/AppBarHeader";

const LoginAndRegister = () => {
  // state variable for error message
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [validMessage, setValidMessage] = useState();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleClick = () => {
    // Validating the form data

    const messageFromValidation = checkValidData(
      email.current.value,
      password.current.value
    );
    // console.log(messageFromValidation);
    setValidMessage(messageFromValidation);
    if (messageFromValidation === null) {
      // Then we will do authentication

      if (isLoginForm) {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            /* const user = userCredential.user; */
          })
          .catch((error) => {
            /*  const errorCode = error.code;
          const errorMessage = error.message; */
            setValidMessage("Email and Password does not match");
          });
      } else {
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
    }
  };

  const alterPage = () => {
    setIsLoginForm(!isLoginForm);
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
          {!isLoginForm && (
            <input
              ref={name}
              type="text"
              placeholder="Enter Full Name"
              a
              className=" w-full p-2 my-3"
            />
          )}
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
            onClick={handleClick}
            className="text-lg  w-full p-2 my-2 bg-blue-600 text-white rounded-2xl "
          >
            {isLoginForm ? "Log In" : "Register"}
          </button>
          <p className="text-center" onClick={alterPage}>
            {isLoginForm
              ? "New User??Register Now"
              : "Already a User??Login Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginAndRegister;
