import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="about">About Us</Link>
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <About />
          <Link to="/home">Home</Link>
        </div>
      ),
    },
    {
      path: "home",
      element: (
        <div>
          <Home />
          <Link to="/about">About Us</Link>
        </div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
