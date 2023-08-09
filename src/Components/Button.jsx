import React from "react";

const Button = ({ onClick, isLoading, disabled, hidden, text, className }) => {
  if (hidden) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-gray-100 px-4 py-1 cursor-pointer bg-gray-900 rounded-lg hover:ring focus:ring ring-offset-1 ring-gray-900 flex justify-center items-center ${className}`}
    >
      {isLoading ? (
        <img className="h-6 w-6" src="/GIF/Loading White.gif" alt="Loading" />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
