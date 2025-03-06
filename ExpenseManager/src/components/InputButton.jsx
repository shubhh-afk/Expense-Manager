import React from "react";

function InputButton({
  label,
  type = "text",
  placeholder = "",
  value,
  className = "",
  btnClassName = "",
  onChange,
  onTrack,
  buttonText,
  ...props
}) {
  return (
    <div className="flex items-center p-2 rounded-none">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border bg-gray-50 border-orange-500 px-1.5 py-0.5 focus:outline-none focus:ring-1 focus:ring-orange-600 ${className}`}
        {...props}
      />
      <button
        onClick={onTrack}
        className={`px-2 py-[4px] border-1 border-orange-500 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-none ${btnClassName}`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default InputButton;
