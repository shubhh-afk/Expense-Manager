import React from "react";

function Button({
  buttonText,
  type = "button",
  bgColor = "",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`text-center px-4 py-2 rounded-md ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {buttonText}
    </button>
  );
}

export default Button;
