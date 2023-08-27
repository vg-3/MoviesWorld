import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./FallbackPages/Root";
import Home from "./Components/pages/Home";
import Movies, { loader as moviesLoader } from "./Components/pages/Movies";
import Actors from "./Components/pages/Actors";
import Directors from "./Components/pages/Directors";
import Error from "./FallbackPages/Error";

const router = createBrowserRouter([
  {
    paht: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/actors",
        element: <Actors></Actors>,
      },
      {
        path: "/movies",
        element: <Movies></Movies>,
        loader: moviesLoader,
      },
      {
        path: "/Directors",
        element: <Directors></Directors>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
