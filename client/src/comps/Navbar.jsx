import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 px-2">
      <Link to="profile">to profile</Link>
    </nav>
  );
};

export default Navbar;
