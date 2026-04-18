import React from "react";

const NavBar = () => {
  return (
    <div className="bg-white p-4 font-bold font-mono text-2xl flex items-center  rounded-md">
      <img
        src="https://www.gstatic.com/devrel-devsite/prod/v38a693baeb774512feb42f10aac8f755d8791ed41119b5be7a531f8e16f8279f/firebase/images/touchicon-180.png"
        alt=""
        className="w-10"
      />
      <h1>FireBase Contact App</h1>
    </div>
  );
};

export default NavBar;
