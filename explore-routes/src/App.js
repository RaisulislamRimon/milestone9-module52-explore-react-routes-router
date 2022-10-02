import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Main from "./layout/Main";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/friends", element: <Friends /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
