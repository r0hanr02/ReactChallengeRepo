/* eslint-disable react/prop-types */
// import React from "react";

// import { useState } from "react";
// import { setLocalStorage } from "../../utils/localStorage";

const Header = ({ changeUser, data }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">Hi User ✌</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 text-white px-5 py-2 rounded-md "
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
