import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete02Icon, Edit02Icon } from "@hugeicons/core-free-icons";
function ManageExpenses() {
  return (
    // Parent container
    <div className="w-full h-screen flex justify-center p-4">
      {/* // Child container for content */}
      <div className="w-full h-full min-w-[768px] bg-white p-6 rounded-xs">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold uppercase text-gray-700 text-left mb-10">
          Manage Expenses
        </h1>
        <div className="w-full bg-white shadow-md border border-orange-500 p-6 rounded-xs">
          {/* Top Section with Button & Links */}
          <div className="flex justify-between items-center mb-4">
            <Button
              buttonText="Create Expense"
              className="bg-orange-600 hover:bg-orange-700"
            />

            <div className="flex justify-evenly gap-15 ">
              <a href="#" className="text-blue-800 hover:text-blue-700">
                Vendor Registration Form
              </a>
              <a href="#" className="text-blue-800 hover:text-blue-700">
                Temporary Employment
              </a>
            </div>
          </div>

          <hr className="border-t-1 border-orange-500 mb-4" />

          {/* Form Fields - Will remain 3 columns on tablet & desktop */}
          <div className="grid grid-cols-3 gap-4 mb-15">
            <Input type="text" label="Select Expense Date" />
            <Input type="text" label="From Bill Amount" />
            <Input type="text" label="To Bill Amount" />
            <Input type="text" label="Vendor Name" />
            <Input type="text" label="Vendor GST No" />
            <div className="flex items-center space-x-2">
              <Input type="text" label="Bill No" />
              <Button
                buttonText="Search"
                className="bg-orange-600 hover:bg-orange-700 rounded h-10 px-4"
              />
            </div>
          </div>

          {/* Checkbox & Buttons */}
          <div className="flex justify-between items-center mb-15">
            <div className="flex items-center">
              <input className="w-5 h-5" type="checkbox" id="approveAll" />
              <label htmlFor="approveAll" className="ml-2 text-gray-700">
                Approve All
              </label>
            </div>
            <div className="flex gap-4">
              <Button
                buttonText="Approve Expense"
                className="bg-orange-600 hover:bg-orange-700 p-2 rounded"
              />
              <Button
                buttonText="Download Excel"
                className="bg-orange-600 hover:bg-orange-700 p-2 rounded"
              />
            </div>
          </div>

          {/* Table */}
          <div className="w-full">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-200">
                {/* Used map function to generate table headers */}
                <tr>
                  {[
                    "ID",
                    "Expense Requisition No",
                    "Expense Date",
                    "Expense Mode",
                    "Pay To Vendor Name/Person",
                    "Vendor GST No",
                    "Bill No",
                    "Bill Amount",
                    "Sales Manifest No",
                    "Sales Manifest Done",
                    "Updated Date/Time",
                    "Payment From",
                    "Sales Approved By",
                    "Created By",
                    "Actions",
                  ].map((header) => (
                    <th key={header} className="px-2 py-2 border">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="border border-gray-300">
                <tr className="text-center">
                  <td className="px-2 py-2 border">N/A</td>
                  {[
                    { type: "text" },
                    { type: "text" },
                    { type: "dropdown", options: ["Cash", "Cheque", "NEFT"] },
                    { type: "text" },
                    { type: "text" },
                    { type: "text"},
                    { type: "text" },
                    { type: "text" },
                    { type: "dropdown", options: ["Yes", "No"] },
                    { type: "text" },
                    { type: "dropdown", options: ["Option 1", "Option 2"] },
                    { type: "text" },
                    { type: "text" },
                  ].map((field, index) => (
                    <td key={index} className="px-2 py-2 border">
                      {field.type === "text" ? (
                        <Input type="text" className="w-full" />
                      ) : (
                        <select className="w-full border rounded px-2 py-1">
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
                  <td className="px-2 py-2 border">
                    <div className="flex justify-center items-center">
                      <button
                        type="button"
                        className="px-2 py-1 bg-green-500 border border-gray-300 rounded hover:bg-green-600 focus:outline-none mr-2"
                      >
                        <HugeiconsIcon
                          icon={Edit02Icon}
                          size={18}
                          strokeWidth={1}
                          className="pointer-events-none"
                        />
                      </button>
                      <button
                        type="button"
                        className="px-2 py-1 border bg-red-500 border-gray-300 rounded hover:bg-red-600 focus:outline-none"
                      >
                        <HugeiconsIcon
                          icon={Delete02Icon}
                          size={18}
                          strokeWidth={1}
                          className="pointer-events-none"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageExpenses;
