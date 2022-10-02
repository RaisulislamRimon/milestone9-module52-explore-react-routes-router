import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink
        to="/home"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : null,
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : null,
          };
        }}
      >
        Products
      </NavLink>
      <NavLink
        to="/friends"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : null,
          };
        }}
      >
        Friends
      </NavLink>
      <NavLink
        to="/posts"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : null,
          };
        }}
      >
        Posts
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : null,
          };
        }}
      >
        About
      </NavLink>
    </div>
  );
};

export default Header;
