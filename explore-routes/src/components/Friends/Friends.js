import React from "react";
import { useLoaderData } from "react-router-dom";

const Friends = () => {
  const friends = useLoaderData();
  return (
    <div>
      <h1>Friends component </h1>
      <h3>Total Friends : {friends.length}</h3>
    </div>
  );
};

export default Friends;
