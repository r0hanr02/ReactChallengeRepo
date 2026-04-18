/* eslint-disable react/prop-types */
// import React from 'react'

import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

const AdminDashBoard = ({ changeUser }) => {
  console.log(changeUser);
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashBoard;
