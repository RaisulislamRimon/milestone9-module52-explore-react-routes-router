import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div
      style={{
        border: "1px solid tomato",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <h3>Post: {id}</h3>
      <h2>{title}</h2>
      {/* <p>{body}</p> */}
      <Link to={`/posts/${id}`}>Visit : {id}</Link>
      <Link to={`/posts/${id}`}>
        <button>Visit : {id}</button>
      </Link>
      <button onClick={handleNavigate}>Show Details</button>
    </div>
  );
};

export default Post;
