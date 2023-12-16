import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const Layout = () => {
  return (
    <>
      <header className="flex flex-col justify-center rounded-t-md mb-2">
        <Navbar />
      </header>
      <div className="container mx-auto flex justify-between">
        <Sidebar />
        <main className="flex justify-between py-2 px-4">
          <div className=" w-full bg-gray-500 rounded-md p-2">
            <div className="flex gap-4 px-2 h-[85vh]">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
      {/* <footer className="h-[8%] bg-yellow-200 mt-2">footer</footer> */}
    </>
  );
};

export default Layout;
