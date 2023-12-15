import React from "react";
import userProfile from "../assets/userProfile.jpg";
import { AiFillMessage } from "react-icons/ai";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`open bg-gray-800 rounded-md origin-left duration-500 ${
        !open ? "w-20" : "w-60"
      } px-4 py-4`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="mb-8  flex flex-col items-center "
      >
        <img
          className="rounded-full border-2 cursor-pointer"
          src={userProfile}
          alt=""
        />
        <h3>Saqlain Javed</h3>
      </div>

      <div className="flex items-center gap-2 cursor-pointer pt-2">
        <AiFillMessage color="white" size="2.2rem" />
        <p className={`${!open && "hidden"}`}>Inbox</p>
      </div>
      <div className="flex items-center gap-2  pt-2 cursor-pointer">
        <AiFillMessage color="white" size="2.2rem" />
        <p className={`${!open && "hidden"}`}>Profile</p>
      </div>
      <div className="flex items-center gap-2  pt-2 cursor-pointer">
        <AiFillMessage color="white" size="2.2rem" />
        <p className={`${!open && "hidden"}`}>Interactions</p>
      </div>
      <div className="flex items-center gap-2  pt-2 cursor-pointer">
        <AiFillMessage color="white" size="2.2rem" />
        <p className={`${!open && "hidden"}`}>Something longer</p>
      </div>
    </div>
  );
};

export default Sidebar;
