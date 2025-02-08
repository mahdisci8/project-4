import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Profile = () => {
  return (
    <div>
      Profile
      <header className="p-4 bg-gray-200 flex justify-center items-center">
        
        <nav>
          <ul>
            <li>
              <NavLink to={"/profile/orders"}>Orders</NavLink>
              <NavLink to={"/profile/editProfile"}>edit profile</NavLink>
              <NavLink to ={"/profile/adresses"}>adresses</NavLink>
            </li>
          </ul>
        </nav>
        
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="p-4 bg-gray-200 flex justify-center items-center " >
        footer
      </footer>
    </div>
  );
};

export default Profile;
 