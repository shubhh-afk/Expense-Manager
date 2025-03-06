import React from "react";

function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  error,
  ...props
}) {
  return (
    <div className="flex gap-2 mt-2 p-2 items-center">
      {label && <label className="block text-sm mb-1">{label}:</label>}
      <span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`border border-orange-600 px-1 py-0.5 focus:outline-none focus:ring-1 focus:ring-orange-500 ${className}`}
          {...props}
        />
      </span>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default Input;
