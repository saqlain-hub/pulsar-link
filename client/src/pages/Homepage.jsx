import React from "react";
import Post from "./Post";
import RightSidebar from "../components/RightSidebar";

const Homepage = () => {
  return (
    <main className="relative flex">
      <Post />
      <RightSidebar />
    </main>
  );
};

export default Homepage;
