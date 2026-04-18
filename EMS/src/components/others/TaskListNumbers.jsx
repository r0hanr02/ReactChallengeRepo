/* eslint-disable react/prop-types */
// import React from 'react'

const TaskListNumbers = ({ data }) => {
  if (!data) {
    return <divs>...loading</divs>;
  }
  return (
    <div className="flex mt-10  gap-5">
      <div className="px-6 py-9 w-[45%] bg-orange-400 rounded-md">
        <h2 className="text-3xl font-semibold ">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-semibold ">New Task</h3>
      </div>
      <div className="px-6 py-9 w-[45%] bg-blue-400 rounded-md">
        <h2 className="text-3xl font-semibold ">
          {data.taskNumbers.completed}
        </h2>
        <h3 className="text-xl font-semibold ">Completed Task</h3>
      </div>
      <div className="px-6 py-9 w-[45%] bg-yellow-400 rounded-md">
        <h2 className="text-3xl font-semibold ">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-semibold ">Active Task</h3>
      </div>
      <div className="px-6 py-9 w-[45%] bg-red-400 rounded-md">
        <h2 className="text-3xl font-semibold ">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-semibold ">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
