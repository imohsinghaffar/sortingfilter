import React, { useState } from "react";

const Input = ({ inputHandle }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full max-w-xs">
      <input
        onChange={inputHandle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="text"
        placeholder="Search products..."
        className={`w-full py-2 px-4 pr-10 rounded-lg border-2 transition-all duration-200 ${
          isFocused
            ? "border-indigo-500 ring-2 ring-indigo-200"
            : "border-gray-300 hover:border-gray-400"
        } focus:outline-none shadow-sm`}
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Input;