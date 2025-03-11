import { X } from "lucide-react";
import React from "react";

function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  options = [],
  deleteFile,
  className = "",
  containerClassName = "",
  labelClassName = "",
  error,
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1 ${containerClassName}`}>
      {label && (
        <label
          htmlFor={name}
          className={`block text-sm text-orange-300 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
          {...props}
        >
          <option value="">Select</option>
          {options.map((option, index) =>
            typeof option === "string" ? (
              <option key={index} value={option}>
                {option}
              </option>
            ) : (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )
          )}
        </select>
      ) : type === "file" ? (
        <div className="flex items-center gap-2">
          <input
            id={name}
            type="file"
            name={name}
            onChange={onChange}
            className={`rounded-sm cursor-pointer w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-orange-400 hover:file:bg-gray-600 ${className}`}
            {...props}
          />
          {/* Delete Button */}
          {value && deleteFile && (
            <button
              type="button"
              onClick={deleteFile}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <X size={20} className="w-5 h-5 cursor-pointer"/>
            </button>
          )}
        </div>
        
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
          {...props}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default Input;
