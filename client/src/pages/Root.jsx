import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import UploadPost from "./UploadPost";

const Root = () => {
  return (
    <>
      <div className="w-full overflow-auto bg-gray-600 rounded-md">
        <Dashboard />
        <div className="px-4">
          <UploadPost />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Root;
