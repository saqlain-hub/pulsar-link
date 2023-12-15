import React from "react";
import userProfile from "../assets/userProfile.jpg";
import { AiFillMessage } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 rounded-md w-20 p-3">
      <div>
        <img
          className="rounded-full border-2 cursor-pointer"
          src={userProfile}
          alt=""
        />
      </div>
      <hr />
      <div>
        <AiFillMessage size="2.2rem" />
        <p>Inbox</p>
      </div>
    </div>
  );
};

export default Sidebar;
