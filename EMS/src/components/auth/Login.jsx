/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submit SuccessFully");
    handleLogin(email, password);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-10 w-1/2">
        <h2 className="text-4xl m-3 font-bold">Login Page</h2>
        <form className="flex flex-col gap-4 items-center justify-center">
          <input
            type="email"
            required
            value={email}
            autoComplete="on"
            className="w-11/12 py-2 px-10  text-xl rounded-full bg-transparent border-2 border-gray-300 m-1 placeholder:text-gray-300"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            required
            autoComplete="new-password"
            value={password}
            className="w-11/12 py-2 px-10 text-xl rounded-full bg-transparent border-2 border-gray-300 m-1 placeholder:text-gray-300"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={formSubmit}
            className="py-2 px-5 rounded-full bg-emerald-500  border-gray-300 m-1 hover:bg-emerald-600 duration-150"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
