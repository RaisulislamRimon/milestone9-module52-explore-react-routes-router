import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
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
      <Link to={`/post/${id}`}>Visit : {id}</Link>
      <Link to={`/post/${id}`}>
        <button>Visit : {id}</button>
      </Link>
      <button onClick={handleNavigate}>Show Details</button>
    </div>
  );
};

export default Post;
