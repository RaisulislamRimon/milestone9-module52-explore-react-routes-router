import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  //   console.log(postDetails);
  const { id, title, body } = postDetails;
  return (
    <div>
      <h2>Details about posts : {id}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
