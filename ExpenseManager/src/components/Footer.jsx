import React from "react";

function Footer() {
  return (
    <footer className="w-full flex justify-center gap-4 text-center border-t border-orange-500 bg-gray-900 text-orange-400 px-3 py-2">
      <span>Copyright © 2024-2025 </span>
      <a
        href="https://www.shreemaruti.com"
        className="text-orange-500 font-bold hover:underline hover:text-orange-300"
        target="_blank"
        rel=""
      >
        SHREE MARUTI INTEGRATED LOGISTICS LIMITED
      </a>
      <span> All rights reserved.</span>
    </footer>
  );
}

export default Footer;
