import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#e9ecef]">
      <Navbar />
      <div className="flex justify-center items-center h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}
