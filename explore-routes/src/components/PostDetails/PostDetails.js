import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  console.log(postDetails);
  const { id, title, body, userId } = postDetails;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/friend/${userId}`);
  };
  return (
    <div>
      <h2>Details about posts : {id}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link to={`/friend/${userId}`}>
        <button>Get the Author</button>
      </Link>
      <button onClick={handleNavigate}>Get the author</button>
    </div>
  );
};

export default PostDetails;
