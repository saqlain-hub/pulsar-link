import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="h-[100vh] bg-gray-600 flex justify-center py-6 overflow-hidden">
      <div className="overflow-hidden flex flex-col container p-2 bg-gray-500 rounded-md">
        <header className="flex flex-col justify-center rounded-t-md mb-2">
          <Navbar />
        </header>
        <div className="overflow-hidden flex h-full">
          <aside className="hidden sm:block rounded-md shadow-md mr-2 bg-gray-300 w-[25%]">
            Left
          </aside>

          <Outlet />

          <aside className="hidden lg:block rounded-md shadow-md ml-2 bg-gray-300 w-[25%]">
            Right
          </aside>
        </div>
        {/* <footer className="h-[8%] bg-yellow-200 mt-2">footer</footer> */}
      </div>
    </div>
  );
};

export default Layout;
