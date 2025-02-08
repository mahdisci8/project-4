import React from "react";
import LoginForm from "./LoginForm";
import LoginIntro from "./LoginIntro";

const Login = () => {
  return (
    <div className="grid-cols-2 h-screen  grid bg-gray-400">
      <LoginForm />
      <LoginIntro />
    </div>
  );
};

export default Login;
