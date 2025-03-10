import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete02Icon, Edit02Icon } from "@hugeicons/core-free-icons";
import { Link } from "react-router-dom";

function ManageExpenses() {
  return (
    <div className="w-full max-w-7.5xl bg-white/10 backdrop-blur-lg border border-white/20 text-white p-4 m-2 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold tracking-wide uppercase text-orange-400">
          Manage Expenses
        </h1>
        <Link to="/create-expense">
          <Button
            buttonText="Create Expense"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md"
          />
        </Link>
      </div>
      <div className="flex justify-between text-sm mb-6">
        <a href="#" className="text-orange-400 hover:text-orange-300 transition">
          Vendor Registration Form
        </a>
        <a href="#" className="text-orange-400 hover:text-orange-300 transition">
          Temporary Employment
        </a>
      </div>

      {/* Search Filters */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-orange-400">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Input type="date" label="Expense Date" className="bg-gray-700 border border-gray-600 text-white" />
          <Input type="number" label="From Bill Amount" className="bg-gray-700 border border-gray-600 text-white" />
          <Input type="number" label="To Bill Amount" className="bg-gray-700 border border-gray-600 text-white" />
          <Input type="text" label="Vendor Name" className="bg-gray-700 border border-gray-600 text-white" />
          <Input type="text" label="Vendor GST No" className="bg-gray-700 border border-gray-600 text-white" />
          <Input type="text" label="Bill No" className="bg-gray-700 border border-gray-600 text-white" />
        </div>

        <div className="flex justify-end">
          <Button
            buttonText="Search"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Approve & Download Section */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center">
          <input type="checkbox" id="approveAll" className="w-5 h-5 cursor-pointer accent-orange-500" />
          <label htmlFor="approveAll" className="ml-2 text-sm font-semibold">
            Approve All
          </label>
        </div>
        <div className="flex gap-4">
          <Button
            buttonText="Approve Expense"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md"
          />
          <Button
            buttonText="Download Excel"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse border border-gray-700 text-sm shadow-md bg-gray-800">
          <thead className="bg-gray-700 font-semibold text-white">
            <tr>
              {[
                "ID",
                "Expense No",
                "Date",
                "Mode",
                "Vendor Name",
                "Vendor GST No",
                "Bill No",
                "Amount",
                "Sales Manifest No",
                "Sales Done",
                "Updated Time",
                "Payment From",
                "Approved By",
                "Created By",
                "Actions",
              ].map((header) => (
                <th key={header} className="p-3 border border-gray-600">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Example Row */}
            <tr className="text-center bg-gray-900 transition">
              <td className="p-3 border border-gray-600">N/A</td>
              {[
                { type: "text" },
                { type: "text" },
                { type: "dropdown", options: ["Cash", "Cheque", "NEFT"] },
                { type: "text" },
                { type: "text" },
                { type: "text" },
                { type: "text" },
                { type: "text" },
                { type: "dropdown", options: ["Yes", "No"] },
                { type: "text" },
                { type: "dropdown", options: ["Option 1", "Option 2"] },
                { type: "text" },
                { type: "text" },
              ].map((field, index) => (
                <td key={index} className="p-3 border border-gray-600">
                  {field.type === "text" ? (
                    <Input type="text" className="w-full h-full bg-gray-700 text-white border-gray-600" />
                  ) : (
                    <select className="w-full border rounded px-2 py-1 bg-gray-700 text-white border-gray-600">
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
              ))}

              {/* Action Buttons */}
              <td className="p-3 border border-gray-600">
                <div className="flex justify-center gap-3">
                  <button className="text-green-400 hover:text-green-300 transition">
                    <HugeiconsIcon icon={Edit02Icon} size={18} strokeWidth={1} />
                  </button>
                  <button className="text-red-500 hover:text-red-400 transition">
                    <HugeiconsIcon icon={Delete02Icon} size={18} strokeWidth={1} />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageExpenses;
