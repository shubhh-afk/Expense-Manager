import React, { createContext, useContext, useState } from "react";
import {
  UserCircle2,
  MoreVertical,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

import { NavLink, useLocation } from "react-router-dom";

const SidebarContext = createContext();

function SideBar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <aside className="min-h-screen transition-all duration-200">
        <nav className="h-full flex flex-col bg-gray-900 text-white shadow-md border-r border-gray-800">
          <div className="p-4 flex justify-between items-center border-b border-gray-800">
            <h2
              className={`text-lg font-semibold tracking-wide overflow-hidden transition-all ${
                expanded ? "w-35" : "w-0 opacity-0"
              }`}
            >
              SMILE
            </h2>
            <button
              className="p-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
              onClick={() => setExpanded((curr) => !curr)}
            >
              {expanded ? (
                <ChevronLeft size={22} />
              ) : (
                <ChevronRight size={22} />
              )}
            </button>
          </div>
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>
          <div className="border-t border-gray-800 p-3 flex justify-center items-center">
            <UserCircle2
              size={40}
              className="cursor-pointer text-gray-300 rounded-full hover:text-white transition"
            />
            <div
              className={`flex items-center justify-between overflow-hidden transition-all ${
                expanded ? "w-35 ml-3" : "w-0 opacity-0"
              }`}
            >
              <p className="font-medium cursor-pointer hover:text-orange-400 transition">
                Username
              </p>
              <MoreVertical
                size={20}
                className="cursor-pointer ml-3 text-gray-400 hover:text-white transition"
              />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default SideBar;

export function SideBarItems({ icon, text, to }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <NavLink to={to}>
      <li
        className={`relative flex items-center px-4 py-3 my-1 rounded-lg cursor-pointer transition-all ${
          isActive
            ? "bg-orange-500 text-white"
            : "text-gray-300 hover:bg-gray-800 hover:text-white"
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "ml-3 opacity-100" : "w-0 opacity-0"
          }`}
        >
          {text}
        </span>
      </li>
    </NavLink>
  );
}
