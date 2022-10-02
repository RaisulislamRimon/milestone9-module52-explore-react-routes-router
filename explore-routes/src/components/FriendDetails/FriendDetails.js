import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  console.log(friend);
  const { id, name, email, phone, website, username } = friend;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div>
      <h1>FriendDetails</h1>
      <h2>Id : {id}</h2>
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>{phone}</h3>
      <h3>{website}</h3>
      <h3>{username}</h3>
      <button onClick={handleNavigate}>see posts : {id}</button>
    </div>
  );
};

export default FriendDetails;
