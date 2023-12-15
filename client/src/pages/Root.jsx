import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="overflow-y-auto rounded-md w-full">
      <Outlet />
    </div>
  );
};

export default Root;
