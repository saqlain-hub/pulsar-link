import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Layout = ({ isLoggedIn }) => {
  return (
    <>
      <main className="bg-slate-800 h-screen w-full">
        <div>
          <section>
            <p>right</p>
            <Link to="profile">to profile</Link>
          </section>
          <section>
            center
            <Outlet />
          </section>
          <section>left</section>
        </div>
      </main>
    </>
  );
};

export default Layout;
