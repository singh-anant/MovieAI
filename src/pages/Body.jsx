import React from "react";
import Suggestion from "./Suggestion";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginAndRegister from "./LoginAndRegister";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginAndRegister />,
    },

    {
      path: "/suggestion",
      element: <Suggestion />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
