import React from "react";
import userProfile from "../assets/userProfile.jpg";

const ProfileMini = () => {
  return (
    <div className="lg:h-80 bg-red-100 rounded-md">
      <div className="w-200px h-200px p-2 overflow-hidden">
        <img src={userProfile} alt="" />
      </div>
      <div>
        <h3>Saqlain Javed</h3>
        <p>MERN Stack Developer</p>
      </div>
    </div>
  );
};

export default ProfileMini;
