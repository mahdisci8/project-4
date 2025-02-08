import React from "react";
import Login from "./Pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adresses from "./Pages/profile/Adresses";
import Home from "./Pages/Home";
import Profile from "./Pages/profile/Profile";
import EditProfile from "./Pages/profile/EditProfile";
import Reneder from "./Pages/Reneder";
import Orders from "./Pages/profile/Orders";
const App = () => {
  //   return <div >
  // <Login />

  //   </div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Reneder" element={<Reneder />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} >
           <Route path="editprofile" element={<EditProfile />} />
          <Route path="adresses" element={<Adresses />} />
          <Route path="orders" element={<Orders />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
