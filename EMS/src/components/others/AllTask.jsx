// import React from 'react'

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] w-full p-5 mt-5 rounded-md ">
      <div className="bg-red-500 mb-2 py-2 px-4 rounded-md  flex justify-between">
        <h2 className="w-1/5 ">Employee Name</h2>
        <h3 className="w-1/5 ">New Task</h3>
        <h5 className="w-1/5 ">Active Task</h5>
        <h5 className="w-1/5 ">Completed Task</h5>
        <h5 className="w-1/5 ">Failed Task</h5>
      </div>
      <div className="overflow-auto h-[90%]">
        {userData.map((employee, idx) => (
          <div
            key={idx}
            className="border-2 mb-2 py-2 px-4 rounded-md  flex gap-2 justify-between"
          >
            <h2 className="w-1/5 ">{employee.firstName}</h2>
            <h3 className="w-1/5 text-blue-400">
              {employee.taskNumbers.newTask}
            </h3>
            <h5 className="w-1/5 text-yellow-400">
              {employee.taskNumbers.active}
            </h5>
            <h5 className="w-1/5 text-green-500">
              {employee.taskNumbers.completed}
            </h5>
            <h5 className="w-1/5 text-red-500">
              {employee.taskNumbers.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
