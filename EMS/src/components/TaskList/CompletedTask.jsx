/* eslint-disable react/prop-types */
// import React from "react";

const CompletedTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 p-5 rounded-xl">
      <div className="flex items-center justify-between ">
        <h3 className="text-sm bg-red-600 p-2 rounded-md">{task.category}</h3>
        <h4 className="">{task.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.title}</h2>
      <p className="text-sm">{task.description}</p>
      <div>
        <button className="mt-10 w-full bg-green-700 p-2">Completed</button>
      </div>
    </div>
  );
};

export default CompletedTask;
