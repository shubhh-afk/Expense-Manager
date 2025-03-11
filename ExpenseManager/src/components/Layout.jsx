import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar, { SideBarItems } from "./SideBar";
import Footer from "./Footer";
import { CircleUserRound, Home, LayoutDashboard, Receipt } from "lucide-react";

export default function Layout() {
  return (
    <div className="flex min-h-screen text-white bg-gray-900">
      <SideBar>
        <SideBarItems icon={<CircleUserRound size={30} />} text="Profile" to="/profile"/>
        <SideBarItems icon={<LayoutDashboard size={30} />} text="Dashboard" to="/dashboard" />
        <SideBarItems icon={<Receipt size={30} />} text="Expenses" to="/manage-expenses" />
      </SideBar>
      <div className="flex flex-grow flex-col">
        <Navbar />
        <div className="flex justify-center items-center h-full w-full">
          <Outlet />
        </div>
        <div className="w-full h-16 flex justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
