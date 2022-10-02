import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  return (
    <div>
      <h1>FriendDetails</h1>
      <h2>Id : {friend.id}</h2>
      <h3>{friend.name}</h3>
      <h3>{friend.email}</h3>
      <h3>{friend.phone}</h3>
      <h3>{friend.website}</h3>
      <h3>{friend.username}</h3>
    </div>
  );
};

export default FriendDetails;
