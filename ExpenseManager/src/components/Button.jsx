import React from "react";

function Button({
  buttonText,
  type = "button",
  bgColor = "",
  textColor = "text-gray-900",
  className = "",
  ...props
}) {
  return (
    <button
      className={`text-center bg-gradient-to-tr from-orange-400 to-orange-300 h-10 hover:bg-gradient-to-tr hover:from-orange-400 hover:to-orange-600 font-semibold px-4 py-2 rounded-md cursor-pointer ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {buttonText}
    </button>
  );
}

export default Button;
