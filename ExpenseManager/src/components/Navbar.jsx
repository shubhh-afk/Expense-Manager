import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import InputButton from "./InputButton";

export default function Navbar() {
  const [trackingNumber, setTrackingNumber] = useState("");

  return (
    <nav className="w-full mt-0 h-15 flex bg-gray-400 justify-between items-center px-5">
      <h1 className="text-xl font-bold">Expense Manager</h1>
      <div className=" flex gap-1.3">
        <Input
          type="text"
          placeholder="ENTER SERIES"
          className="text-sm font-light flex items-center p-1 w-32"
        />
        <Input
          type="text"
          placeholder="PINCODE"
          className="text-sm font-light flex items-center p-1 w-32"
        />
        <Input
          type="text"
          placeholder="PLEASE ENTER CENTER/HUB"
          className="text-sm font-light flex w-auto items-center p-1"
        />
        <div className="flex justify-center mt-2 items-center">
          <InputButton
            type="text"
            placeholder="Shipment/Bag Number"
            className="text-md font-light"
            buttonText="Track"
            btnClassName=" bg-orange-500 
            hover:bg-orange-600 border-1 border-t border-r border-b"
          />
        </div>
      </div>
    </nav>
  );
}
