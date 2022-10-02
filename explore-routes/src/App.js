import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import PostDetails from "./components/PostDetails/PostDetails";
import Posts from "./components/Posts/Posts";
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
        {
          path: "/friends",
          element: <Friends />,
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
        },
        {
          path: "/friend/:friendId",
          element: <FriendDetails />,
          loader: async ({ params }) => {
            // console.log(params.friendId);
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
        },
        {
          path: "/posts",
          element: <Posts />,
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
        },
        {
          path: "/posts/:postId",
          element: <PostDetails />,
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postId}`
            );
          },
        },
        { path: "/about", element: <About /> },
        { path: "*", element: <NotFound /> },
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
