import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProfileMini from "../components/ProfileMini";

const Layout = () => {
  return (
    <div className="pb-4">
      <header className="flex flex-col justify-center rounded-t-md mb-2">
        <Navbar />
      </header>
      <main className="flex justify-center">
        <div className="flex flex-col justify-center h-full container p-2 bg-gray-500 rounded-md">
          <div className="flex  px-2">
            <aside className="w-[25%] hidden lg:flex flex-col gap-4 rounded-md mr-2  ">
              <ProfileMini />
              {/* <ProfileMini /> */}
            </aside>

            <Outlet />

            <aside className="w-[35%] hidden lg:flex flex-col gap-4 rounded-md ml-2">
              <ProfileMini />
              <ProfileMini />
            </aside>
          </div>
        </div>
      </main>
      {/* <footer className="h-[8%] bg-yellow-200 mt-2">footer</footer> */}
    </div>
  );
};

export default Layout;
