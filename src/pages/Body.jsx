import React from "react";
import Login from "./Login";
import Suggestion from "./Suggestion";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registration from "./Registration";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Registration />,
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
