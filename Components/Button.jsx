import React from "react";

const Button = ({ children, color }) => {
  return (
    <button className={`${color} rounded-xl border-none w-32 p-4 >}`}>
      {children}
    </button>
  );
};

export default Button;
