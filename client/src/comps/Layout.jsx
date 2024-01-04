import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <>
      <div className="bg-slate-800 h-screen w-full">
        <section>
          <Navbar />
          <p>right</p>
        </section>
        <main>
          <Outlet />
        </main>
        <section>Left</section>
      </div>
    </>
  );
};

export default Layout;
