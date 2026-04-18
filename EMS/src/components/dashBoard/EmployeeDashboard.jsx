/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { data } from "autoprefixer";

const EmployeeDashboard = ({ data, changeUser }) => {
  // console.log(data);
  return (
    <div>
      <div className="p-16 bg-[#icicic]">
        <Header changeUser={changeUser} data={data} />
        <TaskListNumbers data={data} />
        <TaskList data={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
