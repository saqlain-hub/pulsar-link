import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-yellow-200 p-4 overflow-y-auto rounded-md w-full sm:w-[75%]">
      Root
      <Outlet />
    </div>
  );
};

export default Root;
