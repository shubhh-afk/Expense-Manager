import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-[#e9ecef]">
      <SideBar />
      <div className="flex flex-grow flex-col">
        <Navbar />
        <div className="flex justify-center items-center h-full w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
