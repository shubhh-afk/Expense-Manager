import React from "react";

function Button({
  buttonText,
  type = "button",
  bgColor = "bg-orange-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {buttonText}
    </button>
  );
}

export default Button;
