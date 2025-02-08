import React, { useState } from "react";
import Typography from "../../Components/Typography";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
const LoginForm = () => {


  const [userName, setUserName] = useState('')
  const [password , setPassword]=useState('')
  return (
    <div className=" flex items-center justify-center h-full w-full  ">
      <form className="flex flex-col items-center bg-white w-[80%] h-[90%] p-8 rounded-md shadow-lg">
        <Typography variant="h1" className="text-3xl font-bold mb-6">
          SignIn
        </Typography>
        <div className="w-full mb-6">
          <Typography variant="label" className={"my-5 block"}>
            <Input
              placeholder="user name"
              type="text"
              className={"p-4 rounded-md bg-gray-200  w-full text-lg"}
              setValue={setUserName}
            />
          </Typography>
          <Typography variant="label" className={"my-5 block"}>
            <Input
              placeholder="password"
              type="password"
              className={"p-4 rounded-md bg-gray-200  w-full text-lg"}
              setValue={setPassword}
            />
          </Typography>
        </div>
        <Button
          color={"bg-green-500 text-white"}
          className="w-full py-3 rounded-md text-lg font-semibold mb-6"
        >
          SignIn
        </Button>
        <Typography className="text-gray-500 text-sm mb-4">
          or sign in with
        </Typography>
        <div className="flex justify-center gap-4 ">
          <Button className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 ">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{
                color: "blue",
                width: "10%",
                height: "auto",
                minWidth: "40px",
              }}
              className="text-white text-2xl"
            />
          </Button>
          <Button className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500">
            <FontAwesomeIcon
              icon={faGooglePlusG}
              style={{
                width: "10%",
                height: "auto",
                minWidth: "40px",
                color: "red",
              }}
              className="text-white text-2xl"
            />
          </Button>
          <Button className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{
                width: "10%",
                height: "auto",
                minWidth: "40px",
                color: "blue",
              }}
              className="text-white text-2xl"
            />
          </Button>
        </div>
        username :{userName}
      </form>
    </div>
  );
};
export default LoginForm;
