import React from "react";
import Typography from "../../Components/Typography";
import Button from "../../Components/Button";

const LoginIntro = () => {
  return (
    <div className="bg-green-500 w-[80%] h-[90%] m-auto rounded-md p-8 flex flex-col items-center justify-center text-center ">
      <Typography
        variant="h1"
        className={"text-white text-center mb-8 text-3xl"}
      >
        Wellcome back!
      </Typography>
      <Typography variant="p" className={"text-white text-center mb-8 "}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima est
        voluptatem ducimus? Ipsum debitis recusandae quod optio deleniti
        ratione? Aut laboriosam temporibus consequatur nisi minus, illo omnis
        obcaecati laborum odio.
      </Typography>
      <Button
        className={
          "text-white rounded-xl bg-transparent border-none w-[80%] py-2 px-4"
        }
        color={"text-white"}
      >
        No account yet? SignUp
      </Button>
    </div>
  );
};

export default LoginIntro;
