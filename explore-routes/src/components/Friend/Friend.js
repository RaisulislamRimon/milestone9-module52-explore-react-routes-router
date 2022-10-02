import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { id, name, email, phone, username } = friend;
  return (
    <div
      style={{
        border: "1px solid tomato",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <h1>Friend name : {name} </h1>
      <h3>Friend email : {email} </h3>
      <h3>Friend phone : {phone} </h3>
      <Link to={`/friend/${id}`}>
        <p>Friend username : {username}</p>
      </Link>
    </div>
  );
};

export default Friend;
