import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

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
          <h1>About</h1>
          <Link to="/home">Home</Link>
        </div>
      ),
    },
    {
      path: "home",
      element: (
        <div>
          <h1>Home</h1>
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
