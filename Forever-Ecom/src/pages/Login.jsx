import React, { useState } from "react";

const Login = () => {
  const [currentState, setcurrentState] = useState("Sign-in");

  const onSubmitHandle = async (e) => {
    e.preventDefault();
  };
  return (
    <form
      onClick={onSubmitHandle()}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-baseline gap-2 mb-2 mt-10">
        <p className="prata-regulat text3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          placeholder="Name"
          className="w-full px-3 py-3 border border-gray-800 "
          required
        />
      )}

      <input
        type="email"
        placeholder="email"
        className="w-full px-3 py-3 border border-gray-800 "
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-3 border border-gray-800 "
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setcurrentState("Sign U")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setcurrentState("Login Up")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className={`bg-black text-white font-light px-8 py-2 mt-4`}>
        Sign In
      </button>
    </form>
  );
};

export default Login;
