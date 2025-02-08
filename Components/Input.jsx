import React from "react";

const Input = ({ placeholder, type , className , setValue }) => {
  return (
    <input
      className={className} 
      placeholder={placeholder}
      type={type}
      onChange={(e)=>setValue(e.target.value)}
    />
  );
};

export default Input;
