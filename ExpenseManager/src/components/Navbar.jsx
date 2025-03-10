import Input from "./Input";
import { LucideCircleUserRound, MessageCircle } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [username, setUsername] = useState();
  return (
    <nav className="w-full flex flex-wrap items-center justify-between bg-gray-800 text-white py-1 px-4 shadow-lg">
    <div className="flex items-center space-x-3">
      <h1 className="text-2xl font-bold text-orange-500 tracking-wide">
        Expense Manager
      </h1>
    </div>

    {/* Center Section - Search Inputs */}
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <Input
        type="text"
        placeholder="Enter Series"
        className="text-sm px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-orange-400"
      />
      <Input
        type="text"
        placeholder="Pincode"
        className="text-sm px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-orange-400"
      />
      <Input
        type="text"
        placeholder="Enter Center/Hub"
        className="text-sm px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-orange-400"
      />
       <div className="flex items-center h-full">
          <input
            type="text"
            placeholder="Shipment/Bag Number"
            className="text-sm px-3 py-2 rounded-l-md bg-gray-700 border border-gray-600 focus:ring-1 focus:ring-orange-400 h-full"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition h-full">
            Track
          </button>
        </div>
    </div>

    {/* Right Section - User & WhatsApp Icons */}
    <div className="flex items-center space-x-4">
      <button className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition cursor-pointer">
        <LucideCircleUserRound size={24} />
        {username ? <span className="text-sm">{username}</span> : <span className="text-sm">Login</span>}
      </button>
    </div>
  </nav>
  );
}

export default Navbar;
