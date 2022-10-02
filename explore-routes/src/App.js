import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "products",
      element: <Products />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
